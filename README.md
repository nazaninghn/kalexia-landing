# KALEXIA Landing Page

Modern, high-converting landing page for KALEXIA AI Chatbot services built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Modern Design** with Electric Blue (#00D4FF) and Fire Orange (#FF5722)
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 🌐 **Multi-language Support** - EN/TR/FA (i18n ready)
- 📧 **Contact Form** with Telegram Bot integration
- 💰 **Pricing Section** with 3 tiers
- ⭐ **Testimonials** for social proof
- ❓ **FAQ Section** with Schema.org markup for SEO
- 🔍 **SEO Optimized** - sitemap, robots.txt, metadata
- 🎭 **Smooth Animations** and transitions
- 📊 **WhatsApp Integration** for instant contact

## 📦 Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local and add your Telegram Bot credentials
```

## 🔧 Configuration

### Telegram Bot Setup (Recommended)

1. Create a bot with [@BotFather](https://t.me/botfather) on Telegram
2. Get your bot token
3. Get your chat ID (send a message to your bot, then visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`)
4. Add to `.env.local`:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### Optional: Resend Email Setup

Uncomment the Resend code in `app/api/contact/route.ts` and add:

```env
RESEND_API_KEY=your_resend_api_key
RECIPIENT_EMAIL=your@email.com
```

## 🏃 Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free & Fast)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
6. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `kalexia.com`)
4. Update DNS records as instructed by Vercel

## 📁 Project Structure

```
kalexia-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── components/
│   │   ├── Header.tsx            # Navigation header
│   │   └── Hero.tsx              # Hero section
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main landing page
│   ├── robots.ts                 # SEO robots.txt
│   └── sitemap.ts                # SEO sitemap
├── lib/
│   └── i18n.ts                   # Translations
├── public/                       # Static assets
├── .env.local.example            # Environment template
└── package.json
```

## 🎨 Color Palette

- **Electric Blue**: `#00D4FF` - Primary accent, buttons, links
- **Fire Orange**: `#FF5722` - Script titles, highlights
- **Black**: `#0a0a0a` - Text, backgrounds
- **White**: `#ffffff` - Backgrounds, text on dark

## 📝 Customization

### Update Content

Edit `app/page.tsx` to change:
- Services descriptions
- Pricing plans
- Testimonials
- FAQ questions

### Update Metadata

Edit `app/layout.tsx` to change:
- Page title
- Description
- Keywords
- Open Graph tags

### Update Domain

Edit these files and replace `https://kalexia.com`:
- `app/robots.ts`
- `app/sitemap.ts`

### WhatsApp Number

Edit `app/components/Hero.tsx` and replace `YOUR_NUMBER` with your WhatsApp number (format: country code + number, e.g., `905551234567`)

## 🔗 Integration with Django Backend

If you have a Django backend for the chatbot app:

1. Deploy Next.js landing to `yourdomain.com`
2. Deploy Django to `app.yourdomain.com` or keep on Render
3. Link from landing page CTA buttons to Django app

## 📊 Analytics (Optional)

Add Google Analytics or Vercel Analytics:

```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

// In the body:
<Analytics />
```

## 🐛 Troubleshooting

### Contact form not working

1. Check `.env.local` has correct Telegram credentials
2. Verify bot token is valid
3. Check browser console for errors
4. Test API directly: `POST /api/contact` with JSON body

### Images not loading

1. Check Next.js Image domains in `next.config.ts`
2. Use local images in `public/` folder instead

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Support

For issues or questions, contact via:
- WhatsApp: [Your Number]
- Email: [Your Email]
- Telegram: [Your Telegram]

---

Built with ❤️ by KALEXIA
