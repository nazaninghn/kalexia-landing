"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#FF5722] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,87,34,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 relative order-2 md:order-1">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#00D4FF]/10 to-[#FF5722]/10 border border-[#00D4FF]/20 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#00D4FF]"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[#00D4FF] to-[#FF5722] bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-[#00D4FF] to-gray-900 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 text-center hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0099FF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                {t.hero.cta1}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-wider rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2 hover:scale-105"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.hero.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8 border-t border-gray-200">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#0099FF] bg-clip-text text-transparent">500+</div>
              <div className="text-xs md:text-sm text-gray-600">Active Clients</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF5722] to-[#FF7043] bg-clip-text text-transparent">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF5722] bg-clip-text text-transparent">99%</div>
              <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Image - 3D Card Effect */}
        <div className="relative perspective-1000 order-1 md:order-2">
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group">
            
            {/* Image - کل عکس معلوم بدون crop */}
            <Image
              src="/hero-image.jpg"
              alt="AI Chatbot Interface"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />

            {/* Glassmorphism Overlay - فقط روی لایه جداگانه */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#FF5722]/5 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl animate-float">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00D4FF] to-[#0099FF] rounded-lg md:rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-gray-900">Fast Response</div>
                  <div className="text-[10px] md:text-xs text-gray-600">&lt; 2 seconds</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl animate-float animation-delay-2000">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF5722] to-[#FF7043] rounded-lg md:rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-gray-900">AI Powered</div>
                  <div className="text-[10px] md:text-xs text-gray-600">Smart Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00D4FF] to-[#0099FF] rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#FF5722] to-[#FF7043] rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#00D4FF] text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#00D4FF] to-transparent"></div>
      </div>
    </section>
  );
}
