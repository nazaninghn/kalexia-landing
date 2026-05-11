"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "7b47a866-cea3-4652-9561-d94b5b98b684",
          name: formData.name, email: formData.email, message: formData.message,
          subject: `New Contact from KLEXAI - ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else { setFormStatus("error"); setTimeout(() => setFormStatus("idle"), 5000); }
    } catch { setFormStatus("error"); setTimeout(() => setFormStatus("idle"), 5000); }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />

      {/* ─── HOW WE BUILD IT ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white px-6 py-20 text-[#061b27]">
        <div className="absolute left-1/2 top-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-50/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
            <span className="mb-4 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">How it works</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[-0.03em] text-[#071b27]">{t.howWeSolve.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">{t.howWeSolve.subtitle}</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { number: "01", title: t.howWeSolve.listen.title, text: t.howWeSolve.listen.desc, color: "text-white", bg: "bg-cyan-500" },
              { number: "02", title: t.howWeSolve.learn.title, text: t.howWeSolve.learn.desc, color: "text-white", bg: "bg-[#061b27]" },
              { number: "03", title: t.howWeSolve.act.title, text: t.howWeSolve.act.desc, color: "text-white", bg: "bg-orange-500" },
            ].map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 hover:shadow-[0_12px_40px_rgba(6,27,39,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase">Step</span>
                  <div className={`w-10 h-10 ${step.bg} rounded-xl flex items-center justify-center text-sm font-black ${step.color} shadow-md`}>{step.number}</div>
                </div>
                <h3 className="text-base font-bold text-[#071b27] mb-2 group-hover:text-[#00C4EF] transition-colors">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="relative overflow-hidden px-6 py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="relative mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[-0.03em] text-[#071b27]">{t.services.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: t.services.card1.title, desc: t.services.card1.desc, features: t.services.card1.features, featured: false },
              { title: t.services.card2.title, desc: t.services.card2.desc, features: t.services.card2.features, featured: true },
              { title: t.services.card3.title, desc: t.services.card3.desc, features: t.services.card3.features, featured: false },
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? 'bg-[#061b27] text-white shadow-[0_16px_48px_rgba(6,27,39,0.15)]'
                    : 'border border-slate-100 bg-white hover:shadow-[0_12px_40px_rgba(6,27,39,0.06)]'
                }`}>
                {service.featured && <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3">{t.services.coreLabel}</span>}
                <h3 className={`text-lg font-bold tracking-tight mb-3 ${service.featured ? 'text-white' : 'text-[#071b27] group-hover:text-[#00C4EF]'} transition-colors`}>{service.title}</h3>
                <p className={`text-sm leading-6 mb-6 ${service.featured ? 'text-white/60' : 'text-slate-500'}`}>{service.desc}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-2.5 text-sm ${service.featured ? 'text-white/70' : 'text-slate-500'}`}>
                      <span className={`w-1 h-1 rounded-full ${service.featured ? 'bg-cyan-400' : 'bg-[#00C4EF]'}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 bg-white">
        <div className="relative mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#071b27] uppercase tracking-[-0.03em]">{t.faq.title}</h2>
          </motion.div>
          <div className="space-y-2.5">
            {[
              { q: t.faq.q1, a: t.faq.a1 }, { q: t.faq.q2, a: t.faq.a2 }, { q: t.faq.q3, a: t.faq.a3 }, { q: t.faq.q4, a: t.faq.a4 }, { q: t.faq.q5, a: t.faq.a5 },
            ].map((item, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="group rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_24px_rgba(6,27,39,0.03)] transition-all duration-300">
                <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-[#071b27] list-none flex items-center justify-between gap-4">
                  {item.q}
                  <svg className="w-4 h-4 text-slate-300 group-open:rotate-180 group-open:text-[#00C4EF] transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-500 leading-6">{item.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ────────────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden px-6 py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="relative mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-black text-[#071b27] uppercase tracking-[-0.03em] leading-[1.1] mb-4">{t.contact.title}</h2>
              <p className="text-sm text-slate-500 leading-6 mb-4">{t.contact.subtitle}</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">{t.contact.trust}</p>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-3">
              <input type="text" placeholder={t.contact.name} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[#071b27] placeholder-slate-400 text-sm focus:outline-none focus:border-[#00C4EF] transition-colors" />
              <input type="email" placeholder={t.contact.email} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[#071b27] placeholder-slate-400 text-sm focus:outline-none focus:border-[#00C4EF] transition-colors" />
              <textarea placeholder={t.contact.message} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={3} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[#071b27] placeholder-slate-400 text-sm focus:outline-none focus:border-[#00C4EF] transition-colors resize-none" />
              <button type="submit" disabled={formStatus === "loading"} className="w-full py-3.5 bg-[#061b27] text-white rounded-full font-bold text-sm uppercase tracking-wide hover:scale-[1.02] hover:shadow-lg transition-all duration-300 disabled:opacity-50">
                {formStatus === "loading" ? t.contact.sending : t.contact.submit}
              </button>
              {formStatus === "success" && <p className="text-sm text-emerald-500 text-center">{t.contact.success}</p>}
              {formStatus === "error" && <p className="text-sm text-red-500 text-center">{t.contact.error}</p>}
            </motion.form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
