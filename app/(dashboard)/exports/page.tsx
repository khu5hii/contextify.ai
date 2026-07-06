import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default async function Exports() {
  const analyses = await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <main className="px-20">
        <div className="flex flex-col gap-6 p-6">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Exports</h1>

            <p className="text-[#81838C] text-sm">
              Download all your context packages in bulk.
            </p>
          </section>

          <section>
            <div className="grid gap-3 lg:grid-cols-2">
              <a
                href="/api/export/json"
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 text-left bg-[#141416] border border-[#262629] hover:border-[#6875F6]/40"
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
                  className="lucide lucide-file-braces size-8 text-[#6875F6]"
                  aria-hidden="true"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
                  <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path>
                </svg>
                <div className="flex-1">
                  <div className="text-sm font-semibold">
                    All analyses · JSON
                  </div>
                  <div className="text-xs text-[#85858c]">
                    Full structured data, every field.
                  </div>
                </div>
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
                  className="lucide lucide-download size-4 text-[#85858c]"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </a>
              <a
                href="/api/export/markdown"
                className="glass-panel flex items-center gap-4 rounded-3xl p-5 text-left bg-[#141416] border border-[#262629] hover:border-[#6875F6]/40"
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
                  className="lucide lucide-file-text size-8 text-[#6875F6]"
                  aria-hidden="true"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <div className="flex-1">
                  <div className="text-sm font-semibold">
                    AI Context bundle · Markdown
                  </div>
                  <div className="text-xs text-[#85858c]">
                    Concatenated prompts, ready to paste.
                  </div>
                </div>
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
                  className="lucide lucide-download size-4 text-[#85858c]"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </a>
            </div>
          </section>

          <section>
            <h1 className="uppercase font-medium text-sm tracking-widest text-[#85858c] mb-3">
              Per-analysis exports
            </h1>
            {analyses.length > 0 ? (
              <div className="overflow-hidden rounded-3xl border border-[#262629] bg-[#141416] divide-y divide-[#262629]">
                {analyses.map((analysis) => {
                  const data = analysis.data as any;

                  return (
                    <Link
                      key={analysis.id}
                      href={`/analysis/${analysis.id}`}
                      className="flex items-center justify-between p-4 hover:bg-[#202024] bg-[#17171A] transition-colors duration-150"
                    >
                      <div>
                        <p className="text-sm font-medium">
                          {data.companyName || "No analyses yet"}
                        </p>

                        <p className="text-xs text-[#858289]">
                          Open to export{" "}
                          <span className="text-[#858289]">PDF</span>
                          {" · "}
                          <span className="text-[#858289]">MD</span>
                          {" · "}
                          <span className="text-[#858289]">JSON</span>
                          {" · "}
                          <span className="text-[#858289]">TXT</span>
                        </p>
                      </div>

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
                        className="size-4 text-[#85858c]"
                      >
                        <path d="M12 15V3" />
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center bg-[#141416] border border-[#262629] rounded-3xl p-6">
                <p className="text-sm text-[#85858c]">
                  No analyses yet.{" "}
                  <Link href="/new" className="text-[#6875F6] hover:underline">
                    Create one
                  </Link>
                  .
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
