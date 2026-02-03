"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Updates the HTML lang attribute dynamically based on selected language
 * This ensures proper font rendering for Turkish characters (ş, ğ, ı, İ, ö, ü, ç)
 */
export default function LanguageUpdater() {
  const { lang } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update OpenGraph locale meta tag if exists
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', lang === 'tr' ? 'tr_TR' : 'en_US');
    }
  }, [lang]);

  return null; // This component doesn't render anything
}
