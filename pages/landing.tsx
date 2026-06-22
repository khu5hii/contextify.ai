import Navbar from"@/components/navbar"
import { get } from "http"
import { geistSans } from "@/lib/fonts";
import Image from "next/image"

export default function Landing() { 
    return (
        <>
        <Navbar/>
        <div className="flex pt-48 pl-37 min-h-screen px-12 flex-col">
        <div className="max-w-xl">
            <h1 className="text-6xl font-semibold">
            Turn Any Company Website Into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                AI-Ready Intelligence
            </span>
            </h1>
        </div>
            <p className="max-w-xl text-[#81858C] text-lg pt-7">Analyze websites, products, customers, and brand positioning instantly. Generate comprehensive AI-ready context for ChatGPT, Claude, Gemini, Cursor, and AI agents.</p>
        </div>

        <Image className="absolute right-35 top-40"
            src="/demo.png"
            alt="Hero Image"
            width={600}
            height={600}
            />

        <div className="bg-[#0E0E10] border-t border-gray-900 flex flex-col items-center justify-center py-12">
            <p className={`${geistSans.className} flex justify-center text-[#81858C] text-xs tracking-wider font-semibold uppercase`}>Built for teams shipping with ChatGPT, Claude, Gemini, Cursor, Perplexity & more</p>
            <ul className="text-[#616167] text-center pt-4 flex flex-wrap gap-4 justify-center text-sm tracking-wider font-medium">
                <li>ChatGPT</li>
                <li>Claude</li>
                <li>Gemini</li>
                <li>Cursor</li>
                <li>Perplexity</li>
                <li>LangChain</li>
                <li>n8n</li>
            </ul>
        </div>
        </>
    )
}   