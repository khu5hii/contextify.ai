import { prisma } from "@/lib/prisma";

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
    return <h1>Analysis not found.</h1>;
  }

  return (
  <>
    <header>
      <h1>{(analysis.data as any).companyName}</h1>
      <p>{(analysis.data as any).overview.industry}</p>
    </header>
  </>
  )
}
