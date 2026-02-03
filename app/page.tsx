"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StickyCTA from "./components/StickyCTA";
import { useLanguage } from "@/lib/LanguageContext";
import { poppins } from "@/lib/fonts";

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StickyCTA />
      
      {/* About Section - Problems We Solve */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="text-4xl md:text-5xl font-semibold text-[#FF5722]">
              {t.about.why}
            </span>
            <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase mt-4`}>
              {t.about.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-14 md:mb-16">
            {[
              { 
                title: t.about.problem1.title, 
                desc: t.about.problem1.desc,
                delay: "0ms",
                featured: false,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: t.about.problem2.title, 
                desc: t.about.problem2.desc,
                delay: "80ms",
                featured: true,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: t.about.problem3.title, 
                desc: t.about.problem3.desc,
                delay: "160ms",
                featured: false,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: t.about.problem4.title, 
                desc: t.about.problem4.desc,
                delay: "240ms",
                featured: false,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((problem, i) => (
              <div
                key={i}
                className={`bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center group animate-[fadeInUp_600ms_ease_forwards] ${
                  problem.featured ? 'md:scale-[1.02] md:shadow-2xl md:shadow-[#FF5722]/8 md:border md:border-[#FF5722]/25' : ''
                }`}
                style={{ animationDelay: problem.delay, animationFillMode: "forwards" }}
              >
                <div className="text-[#FF5722] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-[#00C4EF] mb-6">
              {t.about.solution}
            </p>
            <a
              href="#expertise"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00C4EF] to-[#0099CC] text-white font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#00C4EF]/30 hover:scale-105 transition-all duration-300"
            >
              {t.about.cta}
            </a>
          </div>
        </div>
      </section>

      {/* How We Solve Section - Process */}
      <section className="py-16 px-6 bg-white border-t border-gray-100 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-2`}>
              {t.howWeSolve.title}
            </h2>
            <p className="text-gray-600 text-base">{t.howWeSolve.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[#00C4EF]/35 via-[#00C4EF]/55 to-[#00C4EF]/35"></div>
            
            {/* Listen */}
            <div className="text-center group relative cursor-pointer">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#00C4EF]/20 group-hover:border-[#00C4EF]/40 transition-colors">
                <span className="text-xs font-bold text-[#00C4EF]">01</span>
              </div>
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#00C4EF] to-[#0099CC] rounded-2xl flex items-center justify-center group-hover:scale-[1.03] group-hover:rotate-2 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00C4EF] transition-colors">{t.howWeSolve.listen.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.howWeSolve.listen.desc}</p>
            </div>

            {/* Learn */}
            <div className="text-center group relative cursor-pointer">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#00C4EF]/20 group-hover:border-[#00C4EF]/40 transition-colors">
                <span className="text-xs font-bold text-[#00C4EF]">02</span>
              </div>
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#00C4EF] to-[#0099CC] rounded-2xl flex items-center justify-center group-hover:scale-[1.03] group-hover:rotate-2 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00C4EF] transition-colors">{t.howWeSolve.learn.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.howWeSolve.learn.desc}</p>
            </div>

            {/* Act */}
            <div className="text-center group relative cursor-pointer">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#00C4EF]/20 group-hover:border-[#00C4EF]/40 transition-colors">
                <span className="text-xs font-bold text-[#00C4EF]">03</span>
              </div>
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#00C4EF] to-[#0099CC] rounded-2xl flex items-center justify-center group-hover:scale-[1.03] group-hover:rotate-2 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00C4EF] transition-colors">{t.howWeSolve.act.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.howWeSolve.act.desc}</p>
            </div>
          </div>

          {/* Bridge text */}
          <div className="text-center mt-10 mb-4">
            <p className="text-sm text-gray-500 uppercase tracking-wider">{t.howWeSolve.bridge}</p>
            <div className="w-px h-12 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent mx-auto mt-4"></div>
          </div>
        </div>
      </section>

      {/* Expertise Section - OUR SOLUTION */}
      <section id="expertise" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white pt-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${poppins.className} text-4xl md:text-5xl font-extrabold uppercase mb-3`}>
              <span className="text-[#FF5722] font-semibold">OUR </span>
              <span className="font-bold">SOLUTION</span>
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to automate conversations intelligently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t.expertise.card1.title,
                desc: t.expertise.card1.desc,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: t.expertise.card2.title,
                desc: t.expertise.card2.desc,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )
              },
              {
                title: t.expertise.card3.title,
                desc: t.expertise.card3.desc,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: t.expertise.card4.title,
                desc: t.expertise.card4.desc,
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group p-6 md:p-8 text-center"
              >
                <div className="text-[#00C4EF] mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-600 mb-4 group-hover:text-[#00C4EF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl md:text-5xl font-special italic text-[#FF5722] animate-glow">
              {t.services.our}
            </span>
            <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase mt-4 gradient-text`}>
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t.services.card1.title,
                desc: t.services.card1.desc,
                features: t.services.card1.features,
                gradient: "from-[#00D4FF] to-[#0099FF]"
              },
              {
                title: t.services.card2.title,
                desc: t.services.card2.desc,
                features: t.services.card2.features,
                gradient: "from-[#FF5722] to-[#FF7043]"
              },
              {
                title: t.services.card3.title,
                desc: t.services.card3.desc,
                features: t.services.card3.features,
                gradient: "from-[#00D4FF] to-[#FF5722]"
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden ${
                  i === 1 ? 'md:scale-105 md:shadow-2xl md:border-2 md:border-[#FF5722]/20 hover:shadow-[#FF5722]/10' : ''
                }`}
              >
                {/* Hero Badge for middle card */}
                {i === 1 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Core Service
                  </div>
                )}
                
                {/* Animated Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6 w-20 h-20 mx-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-20 group-hover:opacity-30 group-hover:rotate-12 transition-all duration-500`}></div>
                  <div className={`absolute inset-2 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {i === 0 && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className={`${poppins.className} text-xl font-bold uppercase tracking-wider text-gray-600 mb-4 group-hover:text-[#00D4FF] transition-colors text-center`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span className="text-[#00D4FF] text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 text-[#00C4EF] font-semibold hover:gap-3 transition-all duration-300"
            >
              {t.services.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase gradient-text`}>
              {t.whyUs.title}
            </h2>
            <p className="text-xl text-gray-600 mt-4">{t.whyUs.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: t.whyUs.card1.title, 
                desc: t.whyUs.card1.desc, 
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                )
              },
              { 
                title: t.whyUs.card2.title, 
                desc: t.whyUs.card2.desc, 
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                )
              },
              { 
                title: t.whyUs.card3.title, 
                desc: t.whyUs.card3.desc, 
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              { 
                title: t.whyUs.card4.title, 
                desc: t.whyUs.card4.desc, 
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: t.whyUs.card5.title, 
                desc: t.whyUs.card5.desc, 
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="text-[#00D4FF] mb-4 flex justify-center group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase`}>
              {t.results.title}
            </h2>
            <p className="text-xl text-gray-300 mt-4">{t.results.subtitle}</p>
            <p className="text-sm text-gray-400 mt-2">Measured across real client deployments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: t.results.metric1.value, label: t.results.metric1.label, desc: t.results.metric1.desc, color: "from-[#00D4FF] to-[#0099FF]" },
              { value: t.results.metric2.value, label: t.results.metric2.label, desc: t.results.metric2.desc, color: "from-[#FF5722] to-[#FF7043]" },
              { value: t.results.metric3.value, label: t.results.metric3.label, desc: t.results.metric3.desc, color: "from-[#00D4FF] to-[#FF5722]" },
              { value: t.results.metric4.value, label: t.results.metric4.label, desc: t.results.metric4.desc, color: "from-[#0099FF] to-[#00D4FF]" }
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                  {metric.value}
                </div>
                <div className="text-xl font-bold mb-2">{metric.label}</div>
                <div className="text-sm text-gray-300">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#00D4FF] rounded-full opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className={`${poppins.className} text-3xl md:text-6xl font-extrabold uppercase gradient-text mb-2 md:mb-4`}>
              {t.howItWorks.title}
            </h2>
            <p className="text-base md:text-xl text-gray-600">{t.howItWorks.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
              {/* Connection Lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] via-[#FF5722] to-[#00D4FF] opacity-20"></div>

              {[
                {
                  number: "01",
                  title: t.howItWorks.step1.title,
                  desc: t.howItWorks.step1.desc,
                  icon: (
                    <svg className="w-10 md:w-12 h-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ),
                  color: "from-[#00D4FF] to-[#0099FF]"
                },
                {
                  number: "02",
                  title: t.howItWorks.step2.title,
                  desc: t.howItWorks.step2.desc,
                  icon: (
                    <svg className="w-10 md:w-12 h-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  ),
                  color: "from-[#FF5722] to-[#FF7043]"
                },
                {
                  number: "03",
                  title: t.howItWorks.step3.title,
                  desc: t.howItWorks.step3.desc,
                  icon: (
                    <svg className="w-10 md:w-12 h-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  color: "from-[#00D4FF] to-[#FF5722]"
                }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  {/* Step Card */}
                  <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10 ${
                    i === 1 ? 'md:border-2 md:border-[#FF5722]/30 md:shadow-2xl' : 'hover:scale-[1.03]'
                  }`}>
                    {/* Number Badge */}
                    <div className={`absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mt-6 md:mt-8 mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className={`${poppins.className} text-lg md:text-xl font-bold uppercase text-center mb-3 md:mb-4 text-gray-900`}>
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Decorative Glow - stronger for middle card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} ${
                    i === 1 ? 'opacity-5 group-hover:opacity-15' : 'opacity-0 group-hover:opacity-10'
                  } rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12 md:mt-16">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-2xl hover:shadow-[#00D4FF]/50 hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                {t.cta.btn1}
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl md:text-5xl font-semibold text-[#00D4FF]">
              {t.testimonials.proven}
            </span>
            <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase mt-4`}>
              {t.testimonials.title}
            </h2>
            <p className="text-gray-400 mt-3 text-sm tracking-wide">Real teams. Real deployments. Real impact.</p>
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 opacity-60">
            <div className="text-2xl md:text-3xl font-bold text-white/80 hover:text-white/100 transition-all duration-300">TechStart</div>
            <div className="text-2xl md:text-3xl font-bold text-white/80 hover:text-white/100 transition-all duration-300">DataFlow</div>
            <div className="text-2xl md:text-3xl font-bold text-white/80 hover:text-white/100 transition-all duration-300">GrowthCo</div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: t.testimonials.card1.quote,
                author: t.testimonials.card1.author,
                role: t.testimonials.card1.role,
                color: "from-[#00D4FF] to-[#0099FF]"
              },
              {
                quote: t.testimonials.card2.quote,
                author: t.testimonials.card2.author,
                role: t.testimonials.card2.role,
                color: "from-[#FF5722] to-[#FF7043]"
              },
              {
                quote: t.testimonials.card3.quote,
                author: t.testimonials.card3.author,
                role: t.testimonials.card3.role,
                color: "from-[#00D4FF] to-[#FF5722]"
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center text-white text-3xl font-serif shadow-lg`}>
                  "
                </div>

                {/* Quote Text */}
                <p className="text-lg text-gray-200 mb-6 mt-4 leading-relaxed italic">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className={`${poppins.className} text-3xl md:text-5xl font-bold text-gray-900`}>
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: t.faq.q1,
                a: t.faq.a1,
              },
              {
                q: t.faq.q2,
                a: t.faq.a2,
              },
              {
                q: t.faq.q3,
                a: t.faq.a3,
              },
              {
                q: t.faq.q4,
                a: t.faq.a4,
              },
              {
                q: t.faq.q5,
                a: t.faq.a5,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <summary className="font-bold text-lg cursor-pointer text-gray-900 group-hover:text-[#00D4FF] transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* FAQ Schema.org Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does it take to set up a chatbot?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most chatbots can be set up and deployed within 1-2 weeks, depending on complexity and customization requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the chatbot integrate with my existing systems?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Our chatbots integrate with popular CRMs, messaging platforms (WhatsApp, Telegram, Instagram), and custom APIs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What languages does the chatbot support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our AI chatbots support 50+ languages including English, Turkish, Persian, Arabic, Spanish, and more."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the RAG system work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "RAG (Retrieval-Augmented Generation) searches your documents and knowledge base to provide accurate, context-aware answers based on your actual data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if the chatbot can't answer a question?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The chatbot can seamlessly transfer the conversation to a human agent or collect contact information for follow-up."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      {/* Final CTA Section - Ready to See It in Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#00D4FF] via-[#0099FF] to-[#FF5722] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <h2 className={`${poppins.className} text-4xl md:text-6xl font-extrabold uppercase`}>
            {t.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t.cta.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#00D4FF] font-bold uppercase tracking-wider rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t.cta.btn1}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#00D4FF] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t.cta.btn2}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">No Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">Live in Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className={`${poppins.className} text-3xl md:text-5xl font-bold text-gray-900 mb-4`}>
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600">{t.contact.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl">
            <input
              type="text"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 border-b-2 border-gray-300 focus:border-[#00D4FF] outline-none transition-colors bg-transparent"
              required
            />
            <input
              type="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 border-b-2 border-gray-300 focus:border-[#00D4FF] outline-none transition-colors bg-transparent"
              required
            />
            <textarea
              placeholder={t.contact.message}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 border-b-2 border-gray-300 focus:border-[#00D4FF] outline-none transition-colors bg-transparent resize-none"
              required
            ></textarea>
            
            {formStatus === "success" && (
              <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800 rounded-lg">
                <p className="font-bold mb-1">✓ Message sent successfully!</p>
                <p className="text-sm">Thanks! Our team will reach out within 24 hours.</p>
              </div>
            )}
            
            {formStatus === "error" && (
              <div className="p-4 bg-red-100 text-red-800 rounded-lg text-center font-semibold">
                {t.contact.error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full px-8 py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-[#00D4FF]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? t.contact.sending : t.contact.submit}
            </button>

            {/* Trust Microcopy */}
            <p className="text-center text-sm text-gray-500 pt-2">
              {t.contact.trust}
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-gray-900 to-black text-white text-center">
        <div className="container mx-auto space-y-6">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <span className="text-gray-600">·</span>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <span className="text-gray-600">·</span>
            <a href={`mailto:${t.footer.contact}`} className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>

          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  );
}
