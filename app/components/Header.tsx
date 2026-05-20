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
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-1"
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          {/* Logo - Left */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="KLEXAI" width={160} height={80} className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Nav Links - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-[#051A24]/70 hover:text-[#051A24] transition-colors">
              {t.nav.services}
            </Link>
            <Link href="#contact" className="text-sm text-[#051A24]/70 hover:text-[#051A24] transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right - Language */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold text-[#051A24]/60 hover:text-[#051A24] transition-colors uppercase"
            >
              {lang === "en" ? "TR" : "EN"}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#051A24] hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMobileMenu}></div>
          <nav className="absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <div className="container mx-auto px-6 py-6 space-y-1">
              <Link href="#about" onClick={closeMobileMenu} className="block py-3 text-base text-[#051A24]">
                {t.nav.about}
              </Link>
              <Link href="#services" onClick={closeMobileMenu} className="block py-3 text-base text-[#051A24]">
                {t.nav.services}
              </Link>
              <Link href="#contact" onClick={closeMobileMenu} className="block py-3 text-base text-[#051A24]">
                {t.nav.contact}
              </Link>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block w-full py-3.5 mt-4 bg-[#00C4EF] text-white text-center font-medium text-sm rounded-full"
              >
                {t.hero.cta1}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
