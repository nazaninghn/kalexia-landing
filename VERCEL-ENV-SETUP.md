# Vercel Environment Variable Setup

## چطور Web3Forms رو روی Vercel فعال کنیم؟

### مرحله 1: رفتن به تنظیمات Vercel

1. برو به: **https://vercel.com/dashboard**
2. پروژه **kalexia-landing** رو پیدا کن و کلیک کن
3. برو به تب **Settings**
4. از منوی سمت چپ، **Environment Variables** رو انتخاب کن

### مرحله 2: اضافه کردن Environment Variable

روی **Add New** کلیک کن و این مقادیر رو وارد کن:

**Key (Name):**
```
WEB3FORMS_ACCESS_KEY
```

**Value:**
```
7b47a866-cea3-4652-9561-d94b5b98b684
```

**Environment:**
- ✅ Production
- ✅ Preview
- ✅ Development

(هر سه رو انتخاب کن)

### مرحله 3: Save کردن

روی **Save** کلیک کن.

### مرحله 4: Redeploy کردن

بعد از اضافه کردن Environment Variable، باید پروژه رو دوباره deploy کنی:

**روش 1: از Vercel Dashboard**
1. برو به تب **Deployments**
2. آخرین deployment رو پیدا کن
3. روی سه نقطه (...) کلیک کن
4. **Redeploy** رو انتخاب کن

**روش 2: از Git (پیشنهادی)**
```bash
git add .
git commit -m "Add Web3Forms integration"
git push origin main
```

Vercel خودکار دوباره deploy می‌کنه.

### مرحله 5: تست کردن

1. برو به سایت آنلاین: **https://klexai.com**
2. فرم تماس رو پر کن
3. ارسال کن
4. ایمیلت رو چک کن!

## ✅ چک‌لیست نهایی

- [ ] Environment Variable تو Vercel اضافه شد
- [ ] هر سه environment (Production, Preview, Development) انتخاب شدن
- [ ] پروژه redeploy شد
- [ ] فرم تست شد و ایمیل رسید

## 🔧 مشکلات رایج

### فرم کار نمی‌کنه؟
1. مطمئن شو Environment Variable درست اضافه شده
2. مطمئن شو بعد از اضافه کردن، redeploy کردی
3. Console browser رو چک کن برای error

### ایمیل نمی‌رسه؟
1. Spam folder رو چک کن
2. Access Key رو دوباره بررسی کن
3. تو Web3Forms dashboard ببین submission ثبت شده یا نه

## 📧 ایمیل دریافت‌کننده

ایمیل‌ها به آدرسی که تو Web3Forms ثبت کردی ارسال میشه.

برای تغییر ایمیل دریافت‌کننده:
1. برو به: https://web3forms.com/dashboard
2. فرم KLEXAI Contact Form رو پیدا کن
3. Settings → Email Settings
4. ایمیل جدید رو اضافه کن
