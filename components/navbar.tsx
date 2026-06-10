import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 "> 
            <div>
                <span className="font-bold text-sm">Contextify</span> <span className="text-[#6875F6] text-sm">AI</span>
            </div>

            <div className=" flex flex-row gap-6">
                <Link className="text-[#797980] text-sm" href="/#">Features</Link>
                <Link className="text-[#797980] text-sm" href="/#">How it works</Link>
                <Link className="text-[#797980] text-sm" href="/#">FAQ</Link>    
            </div>

            <div className="flex flex-row gap-4">
                <button className="text-[#797980] text-sm">Sign in</button>
                <button className=" text-xs font-bold bg-[#647EED] p-3 rounded-3xl">Get Started</button>
            </div>
        </nav>
    );
}