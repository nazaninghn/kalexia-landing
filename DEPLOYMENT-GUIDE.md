# 🚀 Deployment Guide - KLEXAI Landing Page

## 📋 Pre-Deployment Checklist

### ✅ Before Deploying:

- [ ] All code is committed to Git
- [ ] Environment variables are configured
- [ ] Build runs successfully locally
- [ ] All tests pass (if any)
- [ ] Turkish/English translations are complete
- [ ] Images are optimized
- [ ] Contact form API is configured

---

## 🎯 Recommended Deployment Options

### Option 1: Vercel (Recommended - Easiest) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Perfect for Next.js apps

**Steps:**

1. **Install Vercel CLI (Optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI:**
   ```bash
   cd kalexia-landing
   vercel
   ```

3. **Or Deploy via GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✅

**Environment Variables:**
```env
# Add these in Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=hello@klexai.com
```

**Custom Domain:**
- Go to Project Settings → Domains
- Add your domain (e.g., klexai.com)
- Update DNS records as instructed
- SSL certificate is automatic

---

### Option 2: Netlify (Alternative)

**Steps:**

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

**Or via GitHub:**
- Go to [netlify.com](https://netlify.com)
- Click "Add new site" → "Import from Git"
- Select your repository
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Click "Deploy"

---

### Option 3: VPS (DigitalOcean, AWS, etc.)

**Requirements:**
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

**Steps:**

1. **Connect to your server:**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2:**
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone your repository:**
   ```bash
   git clone https://github.com/your-username/klexai-landing.git
   cd klexai-landing/kalexia-landing
   ```

5. **Install dependencies:**
   ```bash
   npm install
   ```

6. **Build the project:**
   ```bash
   npm run build
   ```

7. **Start with PM2:**
   ```bash
   pm2 start npm --name "klexai-landing" -- start
   pm2 save
   pm2 startup
   ```

8. **Configure Nginx:**
   ```nginx
   # /etc/nginx/sites-available/klexai
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

9. **Enable site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/klexai /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Setup SSL with Let's Encrypt:**
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

---

## 🔧 Build & Test Locally

### 1. Test Production Build:
```bash
cd kalexia-landing
npm run build
npm start
```

Visit: http://localhost:3000

### 2. Check for Errors:
```bash
npm run lint
```

### 3. Test Both Languages:
- Default: Turkish (TR)
- Toggle to English (EN)
- Check all sections
- Test contact form

---

## 📝 Environment Variables

### Required Variables:

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://klexai.com
NEXT_PUBLIC_SITE_NAME=KLEXAI

# Contact Form (if using email service)
CONTACT_EMAIL=hello@klexai.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Social Media
NEXT_PUBLIC_WHATSAPP_NUMBER=+905XXXXXXXXX
NEXT_PUBLIC_INSTAGRAM=klexai
NEXT_PUBLIC_LINKEDIN=klexai
NEXT_PUBLIC_TWITTER=klexai
```

### Add to Deployment Platform:

**Vercel:**
- Dashboard → Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

**VPS:**
- Create `.env.local` file on server
- Or use PM2 ecosystem file

---

## 🎨 Custom Domain Setup

### 1. Buy Domain (if needed):
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### 2. DNS Configuration:

**For Vercel:**
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**For Netlify:**
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

**For VPS:**
```
Type    Name    Value
A       @       your-server-ip
CNAME   www     your-domain.com
```

### 3. Wait for DNS Propagation:
- Usually takes 5-30 minutes
- Can take up to 48 hours
- Check: https://dnschecker.org

---

## 📊 Performance Optimization

### 1. Image Optimization:
Already using Next.js Image component ✅

### 2. Font Optimization:
Already using next/font/google ✅

### 3. Enable Compression:
```js
// next.config.ts
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 4. Add Caching Headers:
```js
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] Contact form has rate limiting
- [ ] CORS configured properly
- [ ] Security headers added
- [ ] No sensitive data in client code

### Add Security Headers:

```js
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

---

## 📈 Analytics Setup

### Google Analytics:

1. **Create GA4 Property:**
   - Go to analytics.google.com
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to your site:**
   ```tsx
   // app/layout.tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
     `}
   </Script>
   ```

---

## 🧪 Post-Deployment Testing

### 1. Functionality Tests:
- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Language toggle works (TR ↔ EN)
- [ ] Contact form submits
- [ ] Mobile menu works
- [ ] Sticky CTA appears on scroll
- [ ] All links work
- [ ] Images load properly

### 2. Performance Tests:
- [ ] Lighthouse score > 90
- [ ] Page load < 3 seconds
- [ ] No console errors
- [ ] No 404 errors

### 3. Cross-Browser Tests:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### 4. Mobile Tests:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)

---

## 🔄 Continuous Deployment

### Setup Auto-Deploy from GitHub:

**Vercel:**
1. Connect GitHub repository
2. Every push to `main` branch auto-deploys
3. Preview deployments for PRs

**Netlify:**
1. Connect GitHub repository
2. Configure build settings
3. Auto-deploy on push

**VPS with GitHub Actions:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/klexai-landing/kalexia-landing
            git pull origin main
            npm install
            npm run build
            pm2 restart klexai-landing
```

---

## 📞 Contact Form Configuration

### Option 1: Email Service (Resend, SendGrid)

```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  await resend.emails.send({
    from: 'noreply@klexai.com',
    to: 'hello@klexai.com',
    subject: `New Contact: ${name}`,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
  });
  
  return Response.json({ success: true });
}
```

### Option 2: Direct to WhatsApp

Already implemented in Hero component ✅

---

## 🎯 Quick Deploy Commands

### Vercel (Fastest):
```bash
cd kalexia-landing
vercel --prod
```

### Netlify:
```bash
cd kalexia-landing
npm run build
netlify deploy --prod
```

### VPS:
```bash
ssh user@server
cd /var/www/klexai-landing/kalexia-landing
git pull
npm install
npm run build
pm2 restart klexai-landing
```

---

## 🆘 Troubleshooting

### Build Fails:

1. **Check Node version:**
   ```bash
   node --version  # Should be 18+
   ```

2. **Clear cache:**
   ```bash
   rm -rf .next
   rm -rf node_modules
   npm install
   npm run build
   ```

3. **Check for TypeScript errors:**
   ```bash
   npm run lint
   ```

### Site Not Loading:

1. **Check DNS:**
   ```bash
   nslookup your-domain.com
   ```

2. **Check SSL:**
   - Visit https://your-domain.com
   - Check for certificate errors

3. **Check server logs:**
   ```bash
   pm2 logs klexai-landing
   ```

### Turkish Characters Not Showing:

1. **Check font loading:**
   - Open DevTools → Network
   - Look for font files
   - Should see `latin-ext` subset

2. **Check HTML lang:**
   - View page source
   - Should see `<html lang="tr">`

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R

---

## 📊 Monitoring

### Setup Monitoring:

1. **Vercel Analytics:**
   - Automatic with Vercel deployment
   - Dashboard → Analytics

2. **Google Search Console:**
   - Add property
   - Verify ownership
   - Submit sitemap: https://your-domain.com/sitemap.xml

3. **Uptime Monitoring:**
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

---

## ✅ Final Checklist

Before going live:

- [ ] Build succeeds locally
- [ ] All environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Contact form tested
- [ ] Both languages tested
- [ ] Mobile responsive checked
- [ ] Performance optimized
- [ ] Analytics configured
- [ ] Backup plan ready

---

## 🎉 You're Ready to Deploy!

**Recommended: Start with Vercel**

1. Push code to GitHub
2. Connect to Vercel
3. Deploy in 2 minutes
4. Add custom domain
5. Done! 🚀

**Need help?** Check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

**Last Updated:** 2025-02-03
**Status:** Ready for Production ✅
