"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about", hoverColor: "hover:text-[#F72585]" },
  { name: "Experience", href: "#experience", hoverColor: "hover:text-[#7209b7]" },
  { name: "Projects", href: "#projects", hoverColor: "hover:text-[#b5179e]" },
  { name: "Leadership", href: "#leadership", hoverColor: "hover:text-[#F72585]" },
  { name: "Awards", href: "#awards", hoverColor: "hover:text-[#7209b7]" },
  { name: "Contact", href: "#contact", hoverColor: "hover:text-[#4cc9f0]" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#040407]/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/20 group-hover:border-[#F72585] group-hover:shadow-[0_0_15px_#F72585] transition-all duration-300">
            <Image
              src="/bitmoji.png"
              alt="Srikriti Bitmoji"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#F2E1FB] group-hover:text-white transition-colors">
            Srikriti<span className="text-[#F72585]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium text-gray-300 transition-colors duration-200 ${item.hoverColor} relative group`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F72585] to-[#7209b7] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040407]/95 backdrop-blur-lg border-b border-white/5 py-4 px-6 absolute top-full left-0 w-full shadow-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white py-1 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
