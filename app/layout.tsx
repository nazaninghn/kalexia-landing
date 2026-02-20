import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import LanguageUpdater from "./components/LanguageUpdater";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "KLEXAI - AI Müşteri Destek Asistanı | Türkiye",
  description: "Markanızın tonuyla konuşan, saniyeler içinde yanıt veren AI asistan. WhatsApp, Instagram ve web siteniz için akıllı müşteri destek otomasyonu.",
  keywords: ["AI chatbot", "müşteri desteği", "yapay zeka asistan", "WhatsApp bot", "Türkiye", "KVKK uyumlu"],
  authors: [{ name: "KLEXAI" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "KLEXAI - AI Müşteri Destek Asistanı",
    description: "Markanızın tonuyla konuşan AI asistan ile müşteri desteğinizi otomatikleştirin",
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KLEXAI - AI Müşteri Destek Asistanı",
    description: "Markanızın tonuyla konuşan AI asistan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <LanguageUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
