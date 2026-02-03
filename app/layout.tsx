import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import LanguageUpdater from "./components/LanguageUpdater";
import { roboto, poppins, montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "KLEXAI - Smart AI Chatbots for Business",
  description: "Transform your customer service with intelligent AI chatbots that understand your business, engage customers 24/7, and boost sales automatically.",
  keywords: ["AI chatbot", "business automation", "customer service", "RAG system", "AI assistant"],
  authors: [{ name: "KLEXAI" }],
  openGraph: {
    title: "KLEXAI - Smart AI Chatbots for Business",
    description: "Transform your customer service with intelligent AI chatbots",
    type: "website",
    locale: "tr_TR", // Default Turkish
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KLEXAI - Smart AI Chatbots for Business",
    description: "Transform your customer service with intelligent AI chatbots",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`scroll-smooth ${roboto.variable} ${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <LanguageProvider>
          <LanguageUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
