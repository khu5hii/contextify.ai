import Link from "next/link"

export default function Navbar() {
    return (
        <div className="border-b border-gray-900 sticky top-0 z-50 bg-[#0E0E10] bg-gradient-to-b from-black/90 to-black/40d">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                <div>
                    <span className="font-bold text-sm">Contextify</span> <span className="text-[#6875F6] text-sm">AI</span>
                </div>

                <div className=" flex flex-row gap-6">
                    <Link className="text-[#797980] text-sm hover:text-white" href="/#">Features</Link>
                    <Link className="text-[#797980] text-sm hover:text-white" href="/#">How it works</Link>
                    <Link className="text-[#797980] text-sm hover:text-white" href="/#">FAQ</Link>    
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <Link className="text-[#797980] text-sm hover:text-white" href="/signin">Sign in</Link>
                    <button className=" text-sm bg-[#647EED] px-3 py-1.5 rounded-3xl cursor-pointer">Get Started</button>
                </div>
            </nav>
        </div>
    );
}