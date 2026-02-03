# 🚀 GitHub Setup Guide

## Step 1: Initialize Git (if not already done)

```bash
cd kalexia-landing
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Commit

```bash
git commit -m "Initial commit: KLEXAI landing page ready for production"
```

## Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `klexai-landing` (or your preferred name)
4. Description: "Modern landing page for KLEXAI - AI chatbot solutions"
5. Choose: **Private** or **Public**
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

## Step 5: Connect to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/klexai-landing.git

# Or if using SSH:
git remote add origin git@github.com:YOUR_USERNAME/klexai-landing.git
```

## Step 6: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## ✅ Done!

Your code is now on GitHub!

---

## 🔄 Future Updates

When you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

---

## 🚀 Deploy to Vercel

After pushing to GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your site will be live in 2 minutes!

---

## 📝 Quick Commands Reference

```bash
# Check status
git status

# See changes
git diff

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# Pull latest changes
git pull origin main
```

---

**Need help?** Check the [Git documentation](https://git-scm.com/doc)
