# 🚀 راهنمای سریع KALEXIA Landing

## ✅ چک‌لیست آماده‌سازی (5 دقیقه)

### 1️⃣ نصب و تست محلی
```bash
cd kalexia-landing
npm install
npm run dev
```
✅ سایت روی http://localhost:3000 باز بشه

### 2️⃣ ساخت ربات تلگرام
1. به [@BotFather](https://t.me/botfather) پیام بده
2. `/newbot` بفرست
3. توکن رو کپی کن
4. به ربات پیام بده
5. برو به: `https://api.telegram.org/bot<TOKEN>/getUpdates`
6. Chat ID رو کپی کن

### 3️⃣ تنظیم Environment
فایل `.env.local` بساز:
```env
TELEGRAM_BOT_TOKEN=توکن_ربات
TELEGRAM_CHAT_ID=چت_آیدی
```

### 4️⃣ تست فرم
```bash
npm run dev
```
فرم رو پر کن و چک کن پیام به تلگرام برسه

### 5️⃣ آپلود به GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/kalexia-landing.git
git push -u origin main
```

### 6️⃣ دیپلوی روی Vercel
1. برو [vercel.com](https://vercel.com)
2. Import از GitHub
3. اضافه کردن Environment Variables
4. Deploy!

### 7️⃣ تنظیمات نهایی
- شماره واتساپ در `app/components/Hero.tsx`
- دامنه در `app/robots.ts` و `app/sitemap.ts`
- لینک‌های شبکه‌های اجتماعی در `app/page.tsx` (Footer)

## 🎯 بعد از دیپلوی

✅ تست فرم تماس
✅ تست دکمه واتساپ
✅ چک کردن responsive بودن
✅ تست سرعت سایت
✅ اتصال دامنه (اختیاری)

## 📞 پشتیبانی

اگر مشکلی داشتی، بهم پیام بده!

---

موفق باشی! 💪🚀
