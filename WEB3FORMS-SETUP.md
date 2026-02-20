# Web3Forms Setup Guide

## چطور فرم تماس رو فعال کنیم؟

### مرحله 1: دریافت Access Key

1. برو به: **https://web3forms.com**
2. روی **"Get Started Free"** کلیک کن
3. ایمیلت رو وارد کن
4. یک **Access Key** بهت میده (مثل: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### مرحله 2: تنظیم Environment Variable

1. فایل `.env.local` رو باز کن
2. جای `your_access_key_here` رو با Access Key واقعی‌ت عوض کن:

```env
WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### مرحله 3: Restart کردن سرور

```bash
# سرور رو متوقف کن (Ctrl+C)
# دوباره اجرا کن:
npm run dev
```

### مرحله 4: تست کردن

1. برو به: http://localhost:3000
2. فرم تماس رو پر کن
3. پیام رو ارسال کن
4. ایمیلت رو چک کن!

## ویژگی‌های Web3Forms

✅ **رایگان**: 250 ایمیل در ماه  
✅ **بدون Backend**: نیازی به سرور ایمیل نیست  
✅ **سریع**: کمتر از 5 دقیقه راه‌اندازی  
✅ **امن**: CAPTCHA و Spam Protection داخلی  
✅ **قابل اعتماد**: 99.9% uptime  

## مشکلات رایج

### ایمیل نمی‌رسه؟
- Spam folder رو چک کن
- Access Key رو دوباره بررسی کن
- مطمئن شو سرور restart شده

### خطای 500؟
- `.env.local` رو چک کن
- مطمئن شو Access Key درست وارد شده
- Console رو برای error بررسی کن

## پشتیبانی

اگه مشکلی داشتی:
- Web3Forms Docs: https://docs.web3forms.com
- Support: support@web3forms.com
