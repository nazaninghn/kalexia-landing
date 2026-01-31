"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-gradient-to-br from-gray-900 to-black text-white text-center">
      <div className="container mx-auto space-y-6">
        <div className="flex justify-center gap-6">
          <a 
            href="https://instagram.com/klexai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#00D4FF] transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://linkedin.com/company/klexai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#00D4FF] transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://twitter.com/klexai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#00D4FF] transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-gray-400">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
