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
      - Keep executiveSummary between 150–250 words.
      - Return 5–8 items wherever lists make sense.
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

      Competitive Advantages

      Competitors

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
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to analyze website",
      },
      {
        status: 500,
      }
    );
  }
}