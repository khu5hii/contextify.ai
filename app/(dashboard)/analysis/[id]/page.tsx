import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import AnalysisClient from "./AnalysisClient";

export default async function AnalysisPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const analysis = await prisma.analysis.findUnique({
    where: {
      id,
    },
  });

  if (!analysis) {
    notFound();
  }

  return <AnalysisClient analysis={analysis} />;
}