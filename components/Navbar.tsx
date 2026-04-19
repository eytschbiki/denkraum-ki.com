"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="Denkraum KI Startseite">
          <Image src="/logo.svg" alt="Denkraum KI Logo" width={180} height={48} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          <Link href="/#leistungen" className="text-sm font-medium text-gray-700 hover:text-[#0D47A1] transition-colors duration-200 cursor-pointer">Leistungen</Link>
          <Link href="/#ueber-mich" className="text-sm font-medium text-gray-700 hover:text-[#0D47A1] transition-colors duration-200 cursor-pointer">Über mich</Link>
          <Link href="/#vorgehen" className="text-sm font-medium text-gray-700 hover:text-[#0D47A1] transition-colors duration-200 cursor-pointer">Vorgehen</Link>
          <Link href="/kontakt" className="bg-[#0D47A1] hover:bg-[#1E88E5] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
            Kontakt
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            <Link href="/#leistungen" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors cursor-pointer">Leistungen</Link>
            <Link href="/#ueber-mich" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors cursor-pointer">Über mich</Link>
            <Link href="/#vorgehen" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors cursor-pointer">Vorgehen</Link>
            <Link href="/kontakt" onClick={() => setOpen(false)} className="mt-2 bg-[#0D47A1] text-white px-3 py-2 rounded-lg font-semibold text-center transition-colors cursor-pointer hover:bg-[#1E88E5]">Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
