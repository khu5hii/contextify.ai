import Navbar from "@/components/navbar";
import { geistSans } from "@/lib/fonts";
import Image from "next/image";

const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Cursor",
  "Perplexity",
  "LangChain",
  "n8n",
];

export default function Landing() {
  return (
    <>
      <Navbar />

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-16 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
               <h1 className="text-6xl font-semibold">
                    Turn Any Company Website Into{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        AI-Ready Intelligence
                    </span>
                </h1>

              <p className="mt-7 text-lg text-[#81858C]">
                Analyze websites, products, customers, and brand positioning
                instantly. Generate comprehensive AI-ready context for ChatGPT,
                Claude, Gemini, Cursor, and AI agents.
              </p>
            </div>

            <div>
              <Image
                src="/demo.png"
                alt="Platform demo"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0E0E10] border-y border-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <p
              className={`${geistSans.className} text-center text-xs font-semibold tracking-wider uppercase text-[#81858C]`}
            >
              Built for teams shipping with ChatGPT, Claude, Gemini, Cursor,
              Perplexity & more
            </p>

            <ul className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-medium tracking-wider text-[#616167]">
              {aiTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col items-center pt-24 px-6">
          <h2 className="pb-5 text-xs font-semibold uppercase tracking-widest text-[#6875F6]">
            Features
          </h2>

          <p className="max-w-2xl text-center text-4xl font-semibold">
            Everything you need to brief an AI on any company
          </p>
        </section>
      </main>
    </>
  );
}