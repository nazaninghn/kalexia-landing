"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen md:h-screen relative bg-white overflow-hidden pt-24 md:pt-28">
      <div className="container mx-auto max-w-7xl px-6 md:px-8 relative h-full flex flex-col justify-between py-4 md:py-6">

        {/* Top Area */}
        <div className="flex flex-col md:flex-row justify-between items-start relative z-20 gap-4">
          {/* Left - Big Title */}
          <div>
            <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-black leading-[1.15] tracking-tight text-[#0D212C] uppercase">
              <span className="text-[#00C4EF]">{t.hero.titleHighlight1}</span>{' '}
              {t.hero.titleLine1.replace(t.hero.titleHighlight1, '').trim()}
              <span className="block mt-1 md:mt-2">{t.hero.titleLine2}</span>
              <span className="block mt-1 md:mt-2 italic">
                {t.hero.titleLine3.replace(t.hero.titleHighlight2, '').trim()}{' '}
                <span className="text-[#00C4EF]">{t.hero.titleHighlight2}</span>
              </span>
            </h1>
          </div>

          {/* Right Top - Stat (desktop only) */}
          <div className="hidden md:block text-right max-w-[220px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0D212C] uppercase tracking-tight leading-tight">
              {t.hero.badge1.title}
            </h3>
            <p className="text-xs md:text-sm text-[#051A24]/60 mt-2 leading-relaxed">
              {t.hero.badge1.desc}
            </p>
          </div>
        </div>

        {/* Middle Left - Subtitle + Button */}
        <div className="relative z-20 max-w-[300px] md:max-w-[320px] mt-4 md:mt-0">
          <p className="text-sm md:text-base text-[#051A24]/70 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#051A24] text-white rounded-full px-5 py-2.5 font-medium text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {t.hero.cta1}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex justify-between items-end relative z-20 mt-4 md:mt-0">
          {/* Left Bottom - Description + Social */}
          <div className="max-w-[250px] md:max-w-[280px]">
            <p className="text-xs md:text-sm text-[#051A24]/60 leading-relaxed italic mb-3">
              {t.hero.microLine}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/klexai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#051A24]/20 flex items-center justify-center text-[#051A24]/60 hover:text-[#051A24] hover:border-[#051A24]/40 hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Bottom - Stat (desktop only) */}
          <div className="hidden md:block text-right max-w-[220px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black text-[#0D212C] uppercase tracking-tight leading-tight">
              {t.hero.badge2.title}
            </h3>
            <p className="text-xs md:text-sm text-[#051A24]/60 mt-2 leading-relaxed">
              {t.hero.badge2.desc}
            </p>
          </div>
        </div>

        {/* Mobile Stats (below content on mobile) */}
        <div className="flex md:hidden justify-between mt-6 relative z-20">
          <div>
            <h3 className="text-sm font-black text-[#0D212C] uppercase tracking-tight">{t.hero.badge1.title}</h3>
            <p className="text-[11px] text-[#051A24]/60 mt-1">{t.hero.badge1.desc}</p>
          </div>
          <div className="text-right">
            <h3 className="text-sm font-black text-[#0D212C] uppercase tracking-tight">{t.hero.badge2.title}</h3>
            <p className="text-[11px] text-[#051A24]/60 mt-1">{t.hero.badge2.desc}</p>
          </div>
        </div>

        {/* Center Robot Image */}
        <div className="absolute -top-16 md:-top-20 bottom-0 left-0 right-0 flex items-start justify-center z-10 md:pl-[15%]">
          <img
            src="/hero-image.png"
            alt="AI Assistant"
            className="h-[70%] md:h-full max-h-[850px] object-contain animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>

        {/* Bottom Nav Pill - centered, wider but not bigger */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 bg-white/95 backdrop-blur-md rounded-full px-10 md:px-14 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-300">
          <img src="/logo.png" alt="KLEXAI" className="h-8" />
          <a
            href="#services"
            className="bg-[#051A24] text-white rounded-full px-8 md:px-12 py-3 text-sm font-semibold hover:bg-[#0D212C] transition-colors whitespace-nowrap"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
