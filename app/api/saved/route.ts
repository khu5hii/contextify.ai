import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const savedContext = await prisma.savedContext.create({
    data: {
      company: body.company,
      website: body.website,
      industry: body.industry,
      analysis: body.analysis,
    },
  });

  return NextResponse.json(savedContext);
}

export async function GET() {
  const contexts = await prisma.savedContext.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(contexts);
}