"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTranslation, type Language } from './i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('tr'); // Default to Turkish
  const [mounted, setMounted] = useState(false);
  const t = getTranslation(lang);

  // Load language preference from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'tr'].includes(savedLang)) {
      setLangState(savedLang);
    }
  }, []);

  // Save language preference to localStorage when it changes
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (mounted) {
      localStorage.setItem('language', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
