import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { Share_Tech_Mono } from "next/font/google";
import { prisma } from "@/lib/prisma";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Saved({ analysis }: { analysis: any }) {
  const analyses = await prisma.savedContext.findMany({
    include: {
      analysis: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <main className="px-20">
        <div className="flex flex-col gap-6 p-6">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Saved Contexts</h1>

            <p className="text-[#81838C] text-sm">
              Bookmarked intelligence packages for quick access.
            </p>
          </section>

          <section>
            {analyses.length > 0 ? (
              analyses.map((analysis) => {
                const data = analysis.analysis.data as any;
                const displayWebsite = new URL(
                  data.website || "https://example.com",
                ).hostname;

                return (
                  <Link
                    key={analysis.id}
                    href={`/analysis/${analysis.analysis.id}`}
                    className="block mb-4"
                  >
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
                        <div className="text-right">
                          <p
                            className={`uppercase text-[10px] tracking-widest text-[#00BC7B] ${shareTechMono.className}`}
                          >
                            READY
                          </p>

                          <p className="text-[10px] text-[#85858c] tracking-widest">
                            {analysis.analysis.createdAt.toLocaleDateString()}
                          </p>
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
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center h-50 bg-[#141416] border border-[#262629] rounded-3xl gap-2">
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
                  className="lucide lucide-sparkles mx-auto size-8 text-[#565658]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
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
