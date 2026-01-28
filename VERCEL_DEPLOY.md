# 🚀 دیپلوی سریع روی Vercel (رایگان)

## مرحله 1: Push به GitHub

```bash
# اگر repository نساختی، برو GitHub و بساز:
# https://github.com/new

# بعد این دستورات رو بزن:
cd kalexia-landing

git remote add origin https://github.com/YOUR_USERNAME/kalexia-landing.git
git branch -M main
git push -u origin main
```

## مرحله 2: دیپلوی روی Vercel

### گام 1: ورود به Vercel
1. برو به: https://vercel.com/signup
2. کلیک روی **"Continue with GitHub"**
3. اجازه دسترسی بده

### گام 2: Import پروژه
1. برو به: https://vercel.com/new
2. پیدا کن **"kalexia-landing"** repository
3. کلیک روی **"Import"**

### گام 3: تنظیمات (خودکار تشخیص میده)
- ✅ Framework Preset: **Next.js**
- ✅ Root Directory: `./`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`

### گام 4: Environment Variables
کلیک روی **"Add Environment Variable"**:

```
Name: TELEGRAM_BOT_TOKEN
Value: [توکن ربات تلگرام]

Name: TELEGRAM_CHAT_ID  
Value: [چت آیدی]
```

### گام 5: Deploy!
کلیک روی **"Deploy"** 🚀

⏱️ **2-3 دقیقه صبر کن...**

## ✅ تمام!

لینک سایت: `https://your-project.vercel.app`

---

## 🔧 تنظیم Telegram Bot (اگر نداری)

### ساخت Bot:
1. برو [@BotFather](https://t.me/botfather)
2. بفرست: `/newbot`
3. اسم: `KALEXIA Contact Bot`
4. Username: `kalexia_contact_bot`
5. توکن رو کپی کن

### گرفتن Chat ID:
1. به ربات پیام بده: "سلام"
2. برو: `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. پیدا کن: `"chat":{"id":123456789`
4. عدد `123456789` همون Chat ID هست

---

## 🌐 دامنه اختصاصی (اختیاری)

### اگر دامنه داری:
1. در Vercel: Settings → Domains
2. اضافه کن: `kalexia.com`
3. DNS تنظیم کن:
   - Type: `A` → `76.76.21.21`
   - Type: `CNAME` → `cname.vercel-dns.com`

---

## 🔄 آپدیت سایت

هر بار که تغییری دادی:

```bash
git add .
git commit -m "Update"
git push
```

Vercel خودکار دوباره deploy می‌کنه! 🎉

---

## 📊 مزایای Vercel

- ✅ **رایگان** تا 100GB bandwidth
- ✅ **سریع** - CDN جهانی
- ✅ **Auto Deploy** با هر push
- ✅ **SSL رایگان**
- ✅ **Analytics رایگان**
- ✅ **Preview URLs** برای هر branch

---

## 🆘 مشکلات رایج

### Build Error:
```bash
# محلی تست کن:
npm run build
```

### Environment Variables کار نمی‌کنه:
- Settings → Environment Variables
- بعد Redeploy کن

### فرم کار نمی‌کنه:
- چک کن Telegram Bot فعاله
- به ربات پیام بده
- توکن و Chat ID رو دوباره چک کن

---

**موفق باشی! 🚀**
