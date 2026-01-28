"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-gray-900 to-[#00D4FF] bg-clip-text text-transparent hover:scale-105 transition-transform tracking-tighter"
        >
          KALEXIA
        </Link>

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

        <button
          onClick={toggleLanguage}
          className="px-6 py-2 border-2 border-[#00D4FF] text-[#00D4FF] rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-[#00D4FF] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D4FF]/30"
        >
          {lang === "en" ? "TR" : "EN"}
        </button>
      </div>
    </header>
  );
}
