"use client";

import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";




const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bricolage",
});


const navItems = [
  { name: "About", color: "hover:text-[#b5179e]" },
  { name: "Projects", color: "hover:text-purple-400" },
  { name: "Experience", color: "hover:text-blue-400" },
  { name: "Contact", color: "hover:text-pink-400" },
];


export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      {/* blur + glass */}
      <div className="backdrop-blur-md bg-[#0a0a0f]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto pl-0.5 pr-8 h-16 flex items-center justify-between">
          
          {/* Logo / Name */}


            <div className="relative h-14 w-14 pl-0.5 hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] transition -ml-4 rounded-full overflow-hidden border border-white/20">
                <Image
                src="/bitmoji.png"
                alt="Srikriti Bitmoji"
                fill
                className="object-cover"
                />
            </div>
      

            <div className="flex gap-8 text-l text-gray-300">

            <Link href="#about" className="group hover:text-[#b5179e] transition duration-300">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#b5179e]"></span>
            </Link>

            <Link href="#projects" className="group hover:text-[#560bad] transition duration-300">
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#560bad]"></span>
            </Link>

            <Link href="#experience" className="group hover:text-[#4361ee] transition duration-300">
              Experience
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#4361ee]"></span>
            </Link>

            <Link href="#contact" className="group hover:text-[#4cc9f0] transition duration-300">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#4cc9f0]"></span>
            </Link>




            




          
            </div>
        </div>
      </div>
    </nav>
  );
}
