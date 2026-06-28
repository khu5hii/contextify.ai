import { NextRequest, NextResponse } from "next/server";
import { crawlWebsite } from "@/lib/crawler";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const pages = await crawlWebsite(body.website);

  return NextResponse.json({
    success: true,
    pages,
  });
}