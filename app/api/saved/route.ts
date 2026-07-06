import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { analysisId } = await req.json();

    if (!analysisId) {
      return Response.json(
        { error: "Analysis ID is required" },
        { status: 400 }
      );
    }

    // Prevent duplicate saves
    const existing = await prisma.savedContext.findUnique({
      where: {
        analysisId,
      },
    });

    if (existing) {
      await prisma.savedContext.delete({
        where: {
          analysisId,
        },
      });

      return Response.json({
        saved: false,
      });
    }

    await prisma.savedContext.create({
      data: {
        analysis: {
          connect: {
            id: analysisId,
          },
        },
      },
    });

    return Response.json({
      saved: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to save context" },
      { status: 500 }
    );
  }
}