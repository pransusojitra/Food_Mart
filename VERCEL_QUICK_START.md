# 🚀 Quick Vercel Deployment Steps for Food Mart

## What I've Done ✅
- Created `vercel.json` files for all three projects (Backend, Frontend, Admin)
- Updated API configuration to use environment variables
- Created `.env.example` files for reference
- Added deployment guide with MongoDB setup instructions
- Pushed all files to GitHub

## Next Steps to Deploy to Vercel 🔧

### Step 1: Set Up MongoDB Atlas (Required)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create Free Account & Create a Cluster
3. Create Database User (username + strong password)
4. Get Connection String: `mongodb+srv://username:password@cluster.mongodb.net/foodmart?retryWrites=true&w=majority`
5. ⚠️ Allow access from anywhere (0.0.0.0/0) for Vercel IPs

### Step 2: Deploy Backend First
1. Go to: https://vercel.com/import
2. Select your GitHub repo: `pransusojitra/Food_Mart`
3. Choose `Backend` as Root Directory
4. **Add Environment Variables:**
   ```
   MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/foodmart?retryWrites=true&w=majority
   NODE_ENV = production
   ```
5. Click "Deploy"
6. ⏱️ Wait for completion and **copy the Backend URL** (e.g., `https://food-mart-backend.vercel.app`)

### Step 3: Deploy Frontend (foodmart)
1. Go to: https://vercel.com/new
2. Import GitHub repo again, select `foodmart` as Root Directory
3. **Add Environment Variables:**
   ```
   VITE_API_URL = https://food-mart-backend.vercel.app/api
   VITE_UPLOADS_URL = https://food-mart-backend.vercel.app
   ```
   (Replace with your actual backend URL from Step 2)
4. Click "Deploy"
5. ⏱️ Wait for completion and **copy the Frontend URL**

### Step 4: Deploy Admin Dashboard
1. Go to: https://vercel.com/new
2. Import GitHub repo again, select `Admin` as Root Directory
3. **Add Environment Variables:**
   ```
   VITE_API_URL = https://food-mart-backend.vercel.app/api
   VITE_UPLOADS_URL = https://food-mart-backend.vercel.app
   ```
4. Click "Deploy"
5. ⏱️ Wait for completion and **copy the Admin URL**

## 📊 Your Final URLs Will Be:
- **Customer Frontend:** `https://food-mart-foodmart.vercel.app`
- **Admin Dashboard:** `https://food-mart-admin.vercel.app`
- **API Backend:** `https://food-mart-backend.vercel.app/api`
- **Database:** MongoDB Atlas Cloud

## ⚡ Key Configuration Files Created:
```
Backend/vercel.json          - Serverless API configuration
foodmart/vercel.json         - Frontend static build config
Admin/vercel.json            - Admin static build config
vercel.json                  - Monorepo root configuration
Backend/package.json         - Added start script
foodmart/src/apiConfig.js    - Updated to use env variables
Admin/src/apiConfig.js       - Updated to use env variables
DEPLOYMENT_GUIDE.md          - Complete deployment guide
```

## 🔐 Security Checklist:
- ✅ `.env` files are in `.gitignore`
- ✅ CORS enabled in backend
- ✅ Environment variables stored securely in Vercel
- ✅ MongoDB password protected

## 📧 After Deployment:
- Test all API endpoints
- Verify image uploads work
- Test authentication (login/register)
- Check admin dashboard functionality

## ❓ Need Help?
Refer to `DEPLOYMENT_GUIDE.md` in the root directory for:
- Detailed MongoDB Atlas setup
- Local development testing
- Troubleshooting guide
- File structure overview
