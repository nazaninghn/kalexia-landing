# ⚡ Quick Deploy - 5 Minutes

## 🚀 Fastest Way: Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd kalexia-landing
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. ✅ Done! Your site is live!

**Your site will be at:** `https://your-project.vercel.app`

---

## 🎯 Add Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `klexai.com`)
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait 5-30 minutes
5. ✅ SSL certificate is automatic!

---

## 🔧 Environment Variables (If Needed)

In Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=hello@klexai.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+905XXXXXXXXX
```

---

## ✅ Test Your Site

1. **Homepage:** Check if it loads
2. **Language:** Toggle TR ↔ EN
3. **Mobile:** Test on phone
4. **Contact Form:** Try submitting
5. **Performance:** Run Lighthouse test

---

## 🎉 That's It!

Your site is now live and accessible worldwide!

**Next Steps:**
- Share your link
- Monitor analytics
- Get feedback
- Iterate and improve

---

**Need detailed guide?** See `DEPLOYMENT-GUIDE.md`
