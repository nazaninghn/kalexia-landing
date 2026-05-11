import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "KLEXAI | Şirketinize Özel Güvenli AI Asistanı",
  description: "Kurumsal verilerinizle eğitilmiş, altyapınızdan çıkmayan özel AI asistanlar. MCP protokolü ile sıfır veri sızıntısı. KVKK ve GDPR uyumlu. 5-10 günde devrede.",
  keywords: ["kurumsal AI asistan", "özel yapay zeka", "veri güvenliği AI", "MCP protokol", "KVKK uyumlu AI", "şirket içi AI", "private AI assistant", "enterprise AI", "custom AI chatbot"],
  authors: [{ name: "KLEXAI Studio" }],
  creator: "KLEXAI",
  publisher: "KLEXAI Studio",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://klexai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "KLEXAI | Şirketinize Özel Güvenli AI Asistanı",
    description: "Kurumsal verilerinizle eğitilmiş, altyapınızdan çıkmayan özel AI asistanlar. Sıfır veri sızıntısı garantisi.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    siteName: "KLEXAI",
    url: "https://klexai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLEXAI | Şirketinize Özel Güvenli AI Asistanı",
    description: "Kurumsal verilerinizle eğitilmiş özel AI asistanlar. MCP protokolü ile sıfır veri sızıntısı.",
    creator: "@klexai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="canonical" href="https://klexai.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
