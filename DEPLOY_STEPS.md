# 🚀 راهنمای دیپلوی KALEXIA Landing

## ✅ پیش‌نیاز: Build موفق شد!

## 🎯 روش 1: Vercel (پیشنهادی - رایگان)

### مرحله 1: آپلود به GitHub

```bash
cd kalexia-landing

# اگر git init نکردی:
git init

# همه فایل‌ها رو add کن:
git add .

# Commit کن:
git commit -m "Complete KALEXIA landing page with i18n"

# اگر هنوز repository نساختی، برو GitHub و یه repo جدید بساز
# بعد این دستورات رو بزن:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kalexia-landing.git
git push -u origin main
```

### مرحله 2: دیپلوی روی Vercel

1. **برو به [vercel.com](https://vercel.com)**
2. **Sign up / Login** با GitHub
3. **کلیک روی "New Project"**
4. **Import** کن repository رو
5. **تنظیمات:**
   - Framework Preset: Next.js (خودکار تشخیص میده)
   - Root Directory: `./` (همون root)
   - Build Command: `npm run build` (خودکار)
   - Output Directory: `.next` (خودکار)

6. **Environment Variables اضافه کن:**
   ```
   TELEGRAM_BOT_TOKEN=توکن_ربات_تلگرام
   TELEGRAM_CHAT_ID=چت_آیدی
   ```

7. **کلیک روی "Deploy"**

⏱️ **2-3 دقیقه صبر کن...**

✅ **سایت آماده است!**

لینک: `https://your-project.vercel.app`

---

## 🌐 روش 2: Netlify (رایگان)

### مرحله 1: آپلود به GitHub (مثل بالا)

### مرحله 2: دیپلوی روی Netlify

1. برو [netlify.com](https://netlify.com)
2. Sign up با GitHub
3. "Add new site" → "Import an existing project"
4. انتخاب GitHub repo
5. تنظیمات:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Environment variables اضافه کن
7. Deploy!

---

## 🔧 روش 3: VPS خودت (Ubuntu)

### نصب Node.js و PM2

```bash
# SSH به سرور
ssh user@your-server-ip

# نصب Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# نصب PM2
sudo npm install -g pm2

# کلون پروژه
git clone https://github.com/YOUR_USERNAME/kalexia-landing.git
cd kalexia-landing

# نصب dependencies
npm install

# ساخت production build
npm run build

# ساخت .env.local
nano .env.local
# اضافه کن:
# TELEGRAM_BOT_TOKEN=...
# TELEGRAM_CHAT_ID=...

# اجرا با PM2
pm2 start npm --name "kalexia" -- start
pm2 save
pm2 startup
```

### نصب Nginx

```bash
sudo apt install nginx

# تنظیم Nginx
sudo nano /etc/nginx/sites-available/kalexia

# اضافه کن:
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# فعال کردن
sudo ln -s /etc/nginx/sites-available/kalexia /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### نصب SSL (رایگان)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 📱 تنظیم Telegram Bot

### ساخت Bot

1. برو به [@BotFather](https://t.me/botfather)
2. بفرست: `/newbot`
3. اسم بده: `KALEXIA Contact Bot`
4. Username بده: `kalexia_contact_bot`
5. توکن رو کپی کن

### گرفتن Chat ID

1. به ربات خودت پیام بده: "سلام"
2. برو به این لینک:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```
3. پیدا کن `"chat":{"id":123456789`
4. عدد `123456789` همون Chat ID هست

---

## 🔄 آپدیت سایت

### Vercel/Netlify:
```bash
git add .
git commit -m "Update"
git push
```
خودکار دیپلوی میشه! 🎉

### VPS:
```bash
cd kalexia-landing
git pull
npm install
npm run build
pm2 restart kalexia
```

---

## 🎯 چک‌لیست نهایی

- [ ] Build موفق شد (`npm run build`)
- [ ] کد روی GitHub آپلود شد
- [ ] Telegram Bot ساخته شد
- [ ] Environment Variables تنظیم شدند
- [ ] سایت روی Vercel/Netlify دیپلوی شد
- [ ] فرم تماس تست شد
- [ ] دکمه زبان کار می‌کنه
- [ ] Responsive روی موبایل تست شد
- [ ] شماره واتساپ عوض شد
- [ ] دامنه اختصاصی وصل شد (اختیاری)

---

## 💡 نکات مهم

1. **Vercel رایگان است** تا 100GB bandwidth
2. **Build time** حدود 2-3 دقیقه
3. **Auto Deploy** با هر push به GitHub
4. **Preview URLs** برای هر branch
5. **Analytics** رایگان در Vercel

---

## 🆘 مشکلات رایج

### Build Error
```bash
# پاک کردن cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables کار نمی‌کنه
- در Vercel: Settings → Environment Variables
- Redeploy کن بعد از تغییر

### فرم تماس کار نمی‌کنه
- چک کن Telegram Bot Token درسته
- چک کن Chat ID درسته
- به ربات پیام بده تا فعال بشه

---

**موفق باشی! 🚀**
