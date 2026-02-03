import type { Metadata } from "next";
import { Roboto, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import LanguageUpdater from "./components/LanguageUpdater";

// Clean, readable font for body text - excellent Turkish support
const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

// Modern, professional font for headings - perfect Turkish support
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// Alternative elegant font for special sections
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

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
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
        style={{ fontFeatureSettings: '"kern" 1, "liga" 1' }}
      >
        <LanguageProvider>
          <LanguageUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
