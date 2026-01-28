"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 animate-fade-in">
      <a
        href="#contact"
        className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold rounded-full shadow-2xl hover:shadow-[#00D4FF]/50 hover:scale-110 transition-all duration-300 text-sm md:text-base"
      >
        <span className="hidden sm:inline">{t.hero.cta1}</span>
        <span className="sm:hidden">Demo</span>
        <svg 
          className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}
