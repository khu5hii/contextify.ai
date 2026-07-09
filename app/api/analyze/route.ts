import { ai } from "@/lib/gemini";
import { crawlWebsite } from "@/lib/crawler";
import { mergeCompanyContent } from "@/lib/companyParser";
import { prisma } from "@/lib/prisma";
import { normalizeUrl } from "@/lib/normalizeUrl";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }
    const normalizedUrl = normalizeUrl(url);
    const existing = await prisma.analysis.findUnique({
      where: {
        normalizedUrl,
      },
    });

    if (existing) {
      return Response.json({
        id: existing.id,
        cached: true,
      });
    }

    const pages = await crawlWebsite(url);

    const companyContent = mergeCompanyContent(pages);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      You are an expert market research analyst.

      Analyze the company using ONLY the provided website content.

      Return ONLY valid JSON.
      Do not wrap the response in markdown.
      Do not include explanations before or after the JSON.

      Return exactly this structure:

      {
        "companyName": "",
        "website": "",
        "overview": {
          "executiveSummary": "",
          "industry": "",
          "location": "",
          "mission": "",
          "vision": "",
          "usp": []
        },
        "products": {
          "products": [],
          "services": [],
          "features": [],
          "pricing": ""
        },
        "audience": {
          "summary": "",
          "personas": [
            {
              "title": "",
              "description": ""
            }
          ],
          "painPoints": []
        },
        "aiContext": {
          "competitors": [],
          "strengths": [],
          "weaknesses": [],
          "opportunities": [],
          "threats": []
        },
        "aiContextPackage": ""
      }

      Requirements:

      - Base every field only on the provided website content.
      - If information is unavailable, return an empty string or empty array.
      - Keep executiveSummary between 60-70 words.
      - Industry should be in the format:
        "Financial Technology (Fintech)"
        "Software as a Service (SaaS)"
        "Artificial Intelligence (AI)"
        "Electronic Commerce (E-commerce)"
      - Use the full industry name followed by the common abbreviation in parentheses when applicable.
      - If there is no widely used abbreviation, return only the full industry name.
      - Return 5-6 items wherever lists make sense.
      - Do not invent facts.

      The "aiContextPackage" field must be a single plain-text string optimized for copying into ChatGPT, Claude, Gemini, Grok, or any other AI assistant.

      It should include:

      COMPANY PROFILE

      Company Name

      Website

      Industry

      Executive Summary

      Mission

      Vision

      Products

      Services

      Features

      Target Audience

      Buyer Personas

      Pain Points

      Unique Selling Propositions

      Strengths

      Weaknesses

      Opportunities

      Threats

      At the end include this instruction:

      "You are now acting as an expert on this company. Use all of the information above as context when answering future questions. Stay consistent with the company's positioning, products, audience, and competitive landscape."

      The aiContextPackage must be:
      - plain text
      - easy to read
      - properly spaced
      - suitable for copy-paste
      - not markdown
      - not JSON
      - contained entirely inside the aiContextPackage string.
      - Every section heading MUST end with a colon (:).
      - Every section containing multiple items MUST use one bullet per line.
      - Use "-" for every bullet point.
      - Never separate list items with commas.
      - Format the lists output exactly like this:

      Products:
      - Product 1
      - Product 2
      - Product 3

      Services:
      - Service 1
      - Service 2
      - Service 3

      Features:
      - Feature 1
      - Feature 2
      - Feature 3

      Unique Selling Propositions:
      - USP 1
      - USP 2
      - USP 3

      Strengths:
      - Strength 1
      - Strength 2

      Weaknesses:
      - Weakness 1
      - Weakness 2

      Opportunities:
      - Opportunity 1
      - Opportunity 2

      Threats:
      - Threat 1
      - Threat 2

      Important Context:
      You are now acting as an expert consultant and brand strategist representing this company. Use all of the information provided above as the foundation for your responses.

      Adopt the company's brand voice, values, positioning, and communication style. Tailor your responses to the company's products, services, target audience, and industry. Your answers should demonstrate a deep understanding of the company's business model, competitive landscape, customer needs, and unique value proposition.

      When discussing strategy, prioritize the company's strengths, differentiators, and long-term objectives. Recommend solutions and best practices that align with the company's mission, vision, and market positioning. Maintain consistency with the company's messaging and avoid contradicting the information provided above.

      When information is unavailable, state that it is not specified rather than making assumptions or inventing facts.

      Use this information whenever answering questions about this company.

      Website Content:

      ${companyContent}
      `,
    });

    const text = response.text ?? "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleaned);
    console.log(JSON.stringify(analysis, null, 2));

    const saved = await prisma.analysis.create({
      data: {
        website: url,
        normalizedUrl,
        data: analysis,
      },
    });

    return Response.json({
      id: saved.id,
    });
  } catch (error: any) {
    console.error("===== ANALYZE ERROR =====");
    console.error(error);

    return Response.json(
      {
        error: error?.message || String(error),
        stack: error?.stack,
      },
      { status: 500 }
    );
  }
}