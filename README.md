# KLEXAI Landing Page

Modern, responsive landing page for KLEXAI - AI-powered chatbot solutions for businesses.

## 🌟 Features

- ✅ **Bilingual Support** - Turkish (default) & English
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Modern Design** - Clean, professional UI with smooth animations
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Next.js 16 with optimized fonts and images
- ✅ **Contact Form** - Integrated contact form with validation
- ✅ **Sticky CTA** - Persistent call-to-action button

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd kalexia-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

See `DEPLOYMENT-GUIDE.md` for detailed deployment instructions.

## 🎨 Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Google Fonts (Roboto, Poppins, Montserrat)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod

## 📁 Project Structure

```
kalexia-landing/
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── lib/
│   ├── i18n.ts          # Translations
│   └── LanguageContext.tsx
├── public/              # Static assets
└── package.json
```

## 🌍 Languages

- **Turkish (TR)** - Default language
- **English (EN)** - Secondary language

Users can toggle between languages using the language switcher in the header.

## 🎯 Key Sections

1. **Hero** - Main headline with CTA buttons
2. **Problems** - Pain points we solve
3. **Solution** - How we solve them
4. **Services** - Our service offerings
5. **Why Us** - Key differentiators
6. **Real Results** - Metrics and outcomes
7. **How It Works** - 3-step process
8. **Testimonials** - Social proof
9. **FAQ** - Common questions
10. **Contact** - Contact form

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=hello@klexai.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+905XXXXXXXXX
```

### Customization

- **Colors:** Edit `app/globals.css` (CSS variables)
- **Fonts:** Edit `app/layout.tsx`
- **Content:** Edit `lib/i18n.ts`
- **Images:** Replace files in `public/`

## 📱 Responsive Design

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

All sections are fully responsive with mobile-first approach.

## 🧪 Testing

```bash
# Lint code
npm run lint

# Build test
npm run build
```

## 📄 License

Private - All rights reserved

## 🤝 Support

For support, email hello@klexai.com or visit our website.

---

**Built with ❤️ by KLEXAI Team**
