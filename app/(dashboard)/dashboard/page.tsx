import { prisma } from "@/lib/prisma";
import Sidebar from "@/components/sidebar";
import { Share_Tech_Mono } from "next/font/google";
import Link from "next/link";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Dashboard() {
  const totalAnalyses = await prisma.analysis.count();
  const totalSavedContexts = await prisma.savedContext.count();

  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const thisWeek = await prisma.analysis.count({
    where: {
      createdAt: {
        gte: startOfWeek,
      },
    },
  });

  const analysis = await prisma.analysis.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });

  const data = analysis?.data as any;
  const displayWebsite = new URL(data?.website || "https://example.com")
    .hostname;

  return (
    <>
      <main className="px-4">
        <div className="flex flex-col gap-8 p-4 sm:p-6">
          <section className="flex flex-col gap-2">
            <h1 className="uppercase text-xs font-semibold text-[#6875F5]">
              Workspace
            </h1>

            <h1 className="text-3xl sm:text-4xl font-semibold">
              Company Intelligence
            </h1>

            <p className="text-[#81838C] text-sm">
              Convert any website or social profile into a structured, AI-ready
              context package.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  Companies Analysed
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-[#81838C] shrink-0"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </div>
              <p className="text-3xl font-semibold">{totalAnalyses}</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  Saved Contexts
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-[#81838C] shrink-0"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <p className="text-3xl font-semibold">{totalSavedContexts}</p>
            </div>

            <div className="space-y-2 bg-[#141416] border border-[#262629] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs text-[#81838C] font-semibold">
                  This Week
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-[#81838C] shrink-0"
                >
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
              </div>
              <p className="text-3xl font-semibold">{thisWeek}</p>
            </div>
          </section>

          <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#141416] border border-[#262629] rounded-3xl p-6">
            <div>
              <p className="text-lg font-semibold">Start a new analysis</p>
              <p className="text-[#81838C] text-sm mt-2">
                {`Drop in a website URL, we'll do the rest ;)`}
              </p>
            </div>

            <Link
              href="/new"
              className="flex items-center gap-2 font-semibold text-sm bg-gradient-to-r from-[#0549ab] to-[#620cac] px-4 py-3 rounded-4xl transition-all duration-100 hover:from-[#0a5bd6] hover:to-[#7b15d1] whitespace-nowrap shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Generate Company Intelligence
            </Link>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h1 className="uppercase text-sm font-medium tracking-widest text-[#81838c]">
                Recent Analyses
              </h1>
              <Link
                href="/analyses"
                className="text-xs text-[#6875f6] hover:underline"
              >
                View all →
              </Link>
            </div>

            {analysis ? (
              <Link href={`/analysis/${analysis?.id}`} className="block">
                <div className="flex content-between bg-[#141416] border border-[#262629] rounded-3xl gap-2 p-6 hover:bg-[#202024] cursor-pointer transition-all duration-100">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold tracking-wider">
                      {data.companyName || "No analyses yet"}
                    </p>
                    <p className="text-xs text-[#85858c]">
                      {data.overview.industry} · {displayWebsite}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-right">
                        <p
                          className={`uppercase text-[10px] tracking-widest text-[#00BC7B] ${shareTechMono.className} `}
                        >
                          READY
                        </p>
                        <p className="text-[10px] text-[#85858c] tracking-widest">
                          {analysis?.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="text-[#85858C]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right size-4 text-muted-foreground"
                        aria-hidden="true"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 bg-[#141416] border border-[#262629] rounded-3xl gap-2 px-4 text-center">
                <p className="text-sm font-semibold tracking-wider">
                  No analyses yet
                </p>
                <p className="text-[#81838c] text-xs">
                  Run your first intelligence brief in under 30 seconds.
                </p>
                <Link
                  href="/new"
                  className="flex items-center gap-2 font-semibold text-xs bg-gradient-to-r from-[#0549ab] to-[#620cac] px-4 py-2 rounded-4xl transition-all duration-100 hover:from-[#0a5bd6] hover:to-[#7b15d1] mt-2"
                >
                  Create One
                </Link>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
