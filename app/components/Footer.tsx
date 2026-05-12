"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <>
      {/* Main Parallax Container */}
      <section
        ref={containerRef}
        className="h-screen relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260430_115327_3f256636-9e63-4885-8d0b-09317dc2b0a5.png&w=1280&q=85')`,
        }}
      >
        {/* Footer Card - Top Aligned */}
        <div className="absolute top-0 w-full pt-12 md:pt-24 lg:pt-12 px-4 z-30">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl md:rounded-3xl overflow-hidden"
          >
            {/* Footer Top Content */}
            <div className="p-6 md:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="KLEXAI" className="h-12 md:h-14" />
                </div>

                {/* Links Area */}
                <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16">
                  {/* Column 1 — Navigation */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-3">
                      {t.nav.about}
                    </h4>
                    <ul className="space-y-2">
                      <li><a href="#expertise" className="text-gray-500 font-medium hover:text-[#00C4EF] transition-colors">{t.expertise.title}</a></li>
                      <li><a href="#services" className="text-gray-500 font-medium hover:text-[#00C4EF] transition-colors">{t.services.title}</a></li>
                      <li><a href="#contact" className="text-gray-500 font-medium hover:text-[#00C4EF] transition-colors">{t.nav.contact}</a></li>
                    </ul>
                  </div>

                  {/* Column 2 — Contact Info */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-3">
                      Contact
                    </h4>
                    <ul className="space-y-2">
                      <li><span className="text-gray-500 font-medium text-xs">Tel: 212-613 58 80</span></li>
                      <li><a href="mailto:hello@klexai.com" className="text-gray-500 font-medium hover:text-[#00C4EF] transition-colors text-xs">hello@klexai.com</a></li>
                      <li><a href="https://www.academiadanismanlik.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-medium hover:text-[#00C4EF] transition-colors text-xs">Academia Danışmanlık</a></li>
                    </ul>
                  </div>

                  {/* Column 3 — Address */}
                  <div className="max-w-[200px]">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-3">
                      Address
                    </h4>
                    <p className="text-gray-500 font-medium text-xs leading-5">
                      Bilişim Vadisi - İstinye Üniversitesi, Ayazağa Mah. Kemerburgaz Cad. Vadi İstanbul Park 7A Blok No:7 B, Sarıyer / İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="border-t border-gray-100 bg-white px-6 md:px-10 lg:px-12 py-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500 font-medium">
                  {t.footer.copyright}
                </p>
                <a
                  href="https://www.linkedin.com/company/klexai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#00C4EF] hover:text-white hover:border-[#00C4EF] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parallax Robot Layer */}
        <motion.div
          style={{ y }}
          className="absolute inset-x-0 bottom-0 h-full z-20"
        >
          <img
            src="/hero-image.png"
            alt="AI Robot"
            className="w-full h-full object-contain object-bottom origin-bottom scale-[1.5] sm:scale-110 md:scale-[2.0] lg:scale-105 hover:scale-[1.7] sm:hover:scale-[1.2] md:hover:scale-[2.2] lg:hover:scale-115 active:scale-[1.8] sm:active:scale-[1.25] md:active:scale-[2.3] lg:active:scale-120 hover:rotate-1 active:rotate-2 transition-all duration-300 cursor-pointer animate-float"
          />
        </motion.div>
      </section>
    </>
  );
}
