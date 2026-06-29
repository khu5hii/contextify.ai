import { ai } from "@/lib/gemini";
import { crawlWebsite } from "@/lib/crawler";
import { mergeCompanyContent } from "@/lib/companyParser";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return Response.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }
    const pages = await crawlWebsite(url);

    const companyContent = mergeCompanyContent(pages);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      You are an expert market research analyst.

      Analyze the company from the provided website content.

      Return ONLY valid JSON.

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
        "marketing": {
          "positioning": "",
          "valueProposition": "",
          "channels": [],
          "messaging": ""
        },
        "sales": {
          "salesModel": "",
          "salesProcess": [],
          "customerJourney": [],
          "objections": [],
          "advantages": []
        },
        "aiContext": {
          "competitors": [],
          "strengths": [],
          "weaknesses": [],
          "opportunities": [],
          "threats": []
        }
      }

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
    // console.log(JSON.stringify(analysis, null, 2));

    const saved = await prisma.analysis.create({
      data: {
        website: url,
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