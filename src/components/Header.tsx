"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#faf9f7] border-b border-[#e8e0d5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-light tracking-[0.3em] text-[#1a1a1a] uppercase">
              Belle Martinée
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors duration-200"
            >
              Hem
            </Link>
            <Link
              href="/nyheter"
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors duration-200"
            >
              Nyheter
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors duration-200"
            >
              Butik
            </Link>
            <Link
              href="/om-oss"
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors duration-200"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors duration-200"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1a1a1a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-current transition-all"></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf9f7] border-t border-[#e8e0d5] px-4 py-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors"
            >
              Hem
            </Link>
            <Link
              href="/nyheter"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors"
            >
              Nyheter
            </Link>
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors"
            >
              Butik
            </Link>
            <Link
              href="/om-oss"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c8a87a] transition-colors"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
