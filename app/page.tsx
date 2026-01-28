"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StickyCTA from "./components/StickyCTA";
import { useLanguage } from "@/lib/LanguageContext";

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
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] italic text-[#FF5722] animate-glow">
                {t.about.why}
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.p2}
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 hover:scale-105 transition-all duration-300"
              >
                {t.about.cta}
              </a>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
                alt="AI Technology"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - YOUR PERSONAL AI */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase">
              <span className="text-[#FF5722] font-[family-name:var(--font-playfair)] italic">{t.expertise.our}</span>{" "}
              {t.expertise.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
                title: t.expertise.card1.title,
                desc: t.expertise.card1.desc,
                features: t.expertise.card1.features
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                title: t.expertise.card2.title,
                desc: t.expertise.card2.desc,
                features: t.expertise.card2.features
              },
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                title: t.expertise.card3.title,
                desc: t.expertise.card3.desc,
                features: t.expertise.card3.features
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="text-[#00D4FF]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] italic text-[#FF5722] animate-glow">
              {t.services.our}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase mt-4 gradient-text">
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
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 group relative overflow-hidden"
              >
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-wider text-gray-600 mb-4 group-hover:text-[#00D4FF] transition-colors text-center">
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#00D4FF] rounded-full opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-extrabold uppercase gradient-text mb-2 md:mb-4">
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
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mt-6 md:mt-8 mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold uppercase text-center mb-3 md:mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Decorative Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
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

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] italic text-[#FF5722] animate-glow">
              {t.testimonials.proven}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase mt-4">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: t.testimonials.card1.quote,
                author: t.testimonials.card1.author,
                role: t.testimonials.card1.role,
                rating: 5,
              },
              {
                quote: t.testimonials.card2.quote,
                author: t.testimonials.card2.author,
                role: t.testimonials.card2.role,
                rating: 5,
              },
              {
                quote: t.testimonials.card3.quote,
                author: t.testimonials.card3.author,
                role: t.testimonials.card3.role,
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-[#FF5722] text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
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
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase gradient-text">
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white text-center">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-300">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 hover:scale-105 transition-all duration-300"
            >
              {t.cta.btn1}
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
            >
              {t.cta.btn2}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] italic text-[#FF5722] animate-glow">
              {t.contact.getIn}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase mt-4 gradient-text">
              {t.contact.title}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
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
              <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
                {t.contact.success}
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
              className="w-full px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#00D4FF]/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-gray-900 to-black text-white text-center">
        <div className="container mx-auto space-y-6">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-2xl hover:text-[#00D4FF] transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  );
}
