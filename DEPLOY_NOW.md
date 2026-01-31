# 🚀 Deploy KLEXAI Landing Page

## ✅ Build Successful!
Your site is ready for deployment with:
- ✅ English & Turkish languages working
- ✅ All new content sections
- ✅ Professional SVG icons
- ✅ Modern design preserved

## Quick Deploy Options

### Option 1: Vercel (Recommended - Best for Next.js)

#### Method A: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd kalexia-landing

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? klexai-landing
# - Directory? ./
# - Override settings? No
```

#### Method B: Using Vercel Dashboard
1. Go to https://vercel.com
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

**Environment Variables (if using contact form):**
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project
cd kalexia-landing

# Build
npm run build

# Deploy
netlify deploy --prod

# Follow prompts and select .next folder
```

### Option 3: Render

1. Go to https://render.com
2. Create new "Static Site"
3. Connect your Git repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Create Static Site"

## 🌐 Language Support Verification

After deployment, test both languages:

1. **English**: Visit your site, click language button once
2. **Turkish**: Click language button again
3. **Persistence**: Refresh page - language should stay the same

The language preference is stored in browser localStorage, so it works perfectly on production!

## 📝 Post-Deployment Checklist

- [ ] Test English language
- [ ] Test Turkish language  
- [ ] Test language persistence (refresh page)
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Check all sections load correctly
- [ ] Verify icons display properly

## 🔧 Custom Domain (Optional)

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## 🐛 Troubleshooting

### Language not switching?
- Clear browser cache
- Check browser console for errors
- Verify localStorage is enabled

### Build fails?
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Icons not showing?
- Check if SVG rendering is enabled
- Verify no CSP blocking inline SVG

## 📞 Need Help?

If you encounter any issues:
1. Check the build logs
2. Verify all dependencies installed
3. Test locally first: `npm run build && npm start`

## 🎉 Success!

Once deployed, your site will be live at:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- Render: `https://your-project.onrender.com`

Share the link and enjoy your new AI landing page! 🚀
