import type { Metadata } from "next";
import { Inter, Orbitron, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

// Modern, clean font for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

// Futuristic, tech font for headings
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

// Modern, geometric font for special text
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "KALEXIA - Smart AI Chatbots for Business",
  description: "Transform your customer service with intelligent AI chatbots that understand your business, engage customers 24/7, and boost sales automatically.",
  keywords: ["AI chatbot", "business automation", "customer service", "RAG system", "AI assistant"],
  authors: [{ name: "KALEXIA" }],
  openGraph: {
    title: "KALEXIA - Smart AI Chatbots for Business",
    description: "Transform your customer service with intelligent AI chatbots",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KALEXIA - Smart AI Chatbots for Business",
    description: "Transform your customer service with intelligent AI chatbots",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} ${sora.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
