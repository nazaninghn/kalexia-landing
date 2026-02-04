import { Inter } from "next/font/google";

// Inter - Perfect for Turkish, modern, professional, excellent readability
// Best choice for SaaS/B2B landing pages targeting Turkish market
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Using Inter for everything - consistent, clean, Turkish-optimized
export const roboto = inter; // Backward compatibility
export const poppins = inter; // Backward compatibility  
export const montserrat = inter; // Backward compatibility
