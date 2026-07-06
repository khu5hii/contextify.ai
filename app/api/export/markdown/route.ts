import { prisma } from "@/lib/prisma";
import { getMarkdownContext } from "@/lib/ai-context/formatContext"; // wherever this function lives

export async function GET() {
  const analyses = await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const markdown = analyses
    .map((analysis) => {
      const data = analysis.data as any;
      return getMarkdownContext(data);
    })
    .join("\n\n---\n\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown",
      "Content-Disposition":
        'attachment; filename="ai-context-bundle.md"',
    },
  });
}