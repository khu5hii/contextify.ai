import { prisma } from "@/lib/prisma";

export async function GET() {
  const analyses = await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return new Response(JSON.stringify(analyses, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="analyses.json"',
    },
  });
}