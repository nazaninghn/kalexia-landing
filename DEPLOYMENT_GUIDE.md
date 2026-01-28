# راهنمای دیپلوی KALEXIA Landing Page

## مرحله 1: آماده‌سازی پروژه

### نصب وابستگی‌ها
```bash
cd kalexia-landing
npm install
```

### تست محلی
```bash
npm run dev
```
سایت روی `http://localhost:3000` باز می‌شه

## مرحله 2: تنظیم Telegram Bot (برای فرم تماس)

### ساخت ربات تلگرام
1. به [@BotFather](https://t.me/botfather) در تلگرام پیام بده
2. دستور `/newbot` رو بفرست
3. یک اسم برای ربات انتخاب کن (مثلاً: KALEXIA Contact Bot)
4. یک username انتخاب کن (باید به `bot` ختم بشه، مثلاً: `kalexia_contact_bot`)
5. توکن ربات رو کپی کن (شبیه: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### گرفتن Chat ID
1. به ربات خودت پیام بده (یک پیام ساده مثل "سلام")
2. این لینک رو باز کن (توکن ربات رو جایگزین کن):
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```
3. عدد `chat.id` رو پیدا کن و کپی کن

### تنظیم Environment Variables
فایل `.env.local` بساز:
```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## مرحله 3: دیپلوی روی Vercel (رایگان و سریع)

### آپلود کد به GitHub
```bash
cd kalexia-landing
git init
git add .
git commit -m "Initial commit - KALEXIA landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kalexia-landing.git
git push -u origin main
```

### دیپلوی روی Vercel
1. برو به [vercel.com](https://vercel.com)
2. با GitHub لاگین کن
3. روی "New Project" کلیک کن
4. ریپوی `kalexia-landing` رو انتخاب کن
5. روی "Import" کلیک کن
6. در قسمت "Environment Variables" اضافه کن:
   - `TELEGRAM_BOT_TOKEN` = توکن ربات تلگرام
   - `TELEGRAM_CHAT_ID` = Chat ID تلگرام
7. روی "Deploy" کلیک کن

✅ سایت تو 2-3 دقیقه آماده میشه!

لینک سایت: `https://your-project.vercel.app`

## مرحله 4: اتصال دامنه اختصاصی (اختیاری)

### اگر دامنه داری:
1. در داشبورد Vercel، برو به Settings → Domains
2. دامنه خودت رو اضافه کن (مثلاً: `kalexia.com`)
3. رکوردهای DNS رو طبق دستورالعمل Vercel تنظیم کن:
   - Type: `A` → Value: `76.76.21.21`
   - Type: `CNAME` → Name: `www` → Value: `cname.vercel-dns.com`

### اگر دامنه نداری:
می‌تونی از همون لینک Vercel استفاده کنی یا دامنه بخری از:
- Namecheap
- GoDaddy
- Google Domains

## مرحله 5: تنظیمات نهایی

### شماره واتساپ
فایل `app/components/Hero.tsx` رو باز کن و `YOUR_NUMBER` رو با شماره واتساپت جایگزین کن:
```tsx
href="https://wa.me/905551234567"  // فرمت: کد کشور + شماره (بدون + یا 0)
```

### دامنه در SEO
فایل‌های زیر رو باز کن و `https://kalexia.com` رو با دامنه خودت جایگزین کن:
- `app/robots.ts`
- `app/sitemap.ts`

### کامیت و پوش تغییرات
```bash
git add .
git commit -m "Update WhatsApp number and domain"
git push
```

Vercel به صورت خودکار دوباره دیپلوی می‌کنه!

## مرحله 6: تست فرم تماس

1. برو به سایت دیپلوی شده
2. فرم تماس رو پر کن
3. چک کن که پیام به تلگرام برسه

اگر نرسید:
- Environment Variables رو در Vercel چک کن
- توکن و Chat ID رو دوباره بررسی کن
- Console مرورگر رو چک کن (F12)

## ساختار نهایی

```
yourdomain.com              → Next.js Landing (Vercel)
app.yourdomain.com          → Django Backend (Render)
```

## مشکلات رایج

### فرم کار نمی‌کنه
- Environment Variables رو در Vercel چک کن
- ربات تلگرام رو استارت کن (یک پیام بهش بفرست)

### تصاویر لود نمیشن
- از تصاویر محلی در پوشه `public/` استفاده کن
- یا دامنه تصاویر رو در `next.config.ts` اضافه کن

### بیلد خطا میده
```bash
npm run build
```
خطاها رو بخون و رفع کن

## آپدیت سایت

هر بار که تغییری دادی:
```bash
git add .
git commit -m "توضیح تغییرات"
git push
```

Vercel خودکار دوباره دیپلوی می‌کنه!

## پشتیبانی

اگر مشکلی داشتی، بهم پیام بده 🚀

---

موفق باشی! 💪
