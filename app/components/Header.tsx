"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 md:py-4"
            : "bg-white/80 backdrop-blur-md py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-gray-900 to-[#00D4FF] bg-clip-text text-transparent hover:scale-105 transition-transform tracking-tighter"
          >
            KLEXAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="text-sm font-semibold uppercase tracking-wider hover:text-[#00D4FF] transition-colors relative group"
            >
              {t.nav.about}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold uppercase tracking-wider hover:text-[#00D4FF] transition-colors relative group"
            >
              {t.nav.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold uppercase tracking-wider hover:text-[#00D4FF] transition-colors relative group"
            >
              {t.nav.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop Language Button */}
          <button
            onClick={toggleLanguage}
            className="hidden md:block px-6 py-2 border-2 border-[#00D4FF] text-[#00D4FF] rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-[#00D4FF] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D4FF]/30"
          >
            {lang === "en" ? "EN" : lang === "tr" ? "TR" : "FA"}
          </button>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white text-sm font-bold rounded-full hover:shadow-lg transition-all"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-900 hover:text-[#00D4FF] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          <nav className="absolute top-[72px] left-0 right-0 bg-white shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#about"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-semibold text-gray-900 hover:text-[#00D4FF] transition-colors border-b border-gray-100"
              >
                {t.nav.about}
              </Link>
              <Link
                href="#services"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-semibold text-gray-900 hover:text-[#00D4FF] transition-colors border-b border-gray-100"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-semibold text-gray-900 hover:text-[#00D4FF] transition-colors border-b border-gray-100"
              >
                {t.nav.contact}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMobileMenu();
                }}
                className="w-full py-3 mt-4 border-2 border-[#00D4FF] text-[#00D4FF] rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#00D4FF] hover:text-white transition-all"
              >
                {lang === "en" ? "Switch to TR" : "Switch to EN"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
