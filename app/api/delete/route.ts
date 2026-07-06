import { prisma } from "@/lib/prisma";

export async function DELETE(req: Request) {
  try {
    const { analysisId } = await req.json();

    await prisma.analysis.delete({
      where: {
        id: analysisId,
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to delete analysis" },
      { status: 500 }
    );
  }
}