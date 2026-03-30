# Food Mart - Vercel Deployment Guide

## Prerequisites
- GitHub account with your Food_Mart repository
- Vercel account (connected to GitHub)
- MongoDB Atlas account for cloud database

## Step-by-Step Deployment Instructions

### 1. Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a new database user with password
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/foodmart?retryWrites=true&w=majority`)
5. Copy this URI for later use

### 2. Deploy Backend to Vercel

1. Go to your Vercel Dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository (pransusojitra/Food_Mart)
4. **Framework Preset**: Select "Other"
5. **Root Directory**: Select `Backend`
6. **Build Command**: `npm install`
7. **Output Directory**: Leave empty
8. Click "Environment Variables" and add:
   - **Name**: `MONGO_URI`
   - **Value**: Your MongoDB connection string from Step 1
   - **Name**: `NODE_ENV`
   - **Value**: `production`
9. Click "Deploy"
10. Wait for deployment to complete and copy the deployment URL (e.g., `https://food-mart-backend.vercel.app`)

### 3. Deploy Frontend (foodmart) to Vercel

1. Go to Vercel Dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository again
4. **Framework Preset**: Select "Vite"
5. **Root Directory**: Select `foodmart`
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`
8. Click "Environment Variables" and add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.vercel.app/api` (replace with your backend URL from Step 2)
   - **Name**: `VITE_UPLOADS_URL`
   - **Value**: `https://your-backend-url.vercel.app` (same as backend URL)
9. Click "Deploy"
10. Copy the frontend URL (e.g., `https://food-mart-foodmart.vercel.app`)

### 4. Deploy Admin Dashboard to Vercel

1. Go to Vercel Dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository again
4. **Framework Preset**: Select "Vite"
5. **Root Directory**: Select `Admin`
6. **Build Command**: `npm run build`
7. **Output Directory**: `dist`
8. Click "Environment Variables" and add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.vercel.app/api` (same as frontend)
   - **Name**: `VITE_UPLOADS_URL`
   - **Value**: `https://your-backend-url.vercel.app` (same as frontend)
9. Click "Deploy"
10. Copy the admin URL (e.g., `https://food-mart-admin.vercel.app`)

### 5. Update Environment Variables After Backend Deployment

Once backend is deployed and you have the URL:

1. Go to frontend (foodmart) project settings in Vercel
2. Update the environment variables with the correct backend URL
3. Redeploy the project
4. Go to admin project settings in Vercel
5. Update the environment variables with the correct backend URL
6. Redeploy the project

## Final URLs

After complete deployment, you should have:
- **Frontend**: `https://your-frontend-url.vercel.app`
- **Admin Dashboard**: `https://your-admin-url.vercel.app`
- **Backend API**: `https://your-backend-url.vercel.app/api`
- **MongoDB**: Connected via Atlas

## Local Development

To test locally before deploying:

1. Ensure MongoDB is running locally:
   ```bash
   # On Windows, ensure MongoDB is installed and running
   ```

2. Navigate to Backend directory and start the server:
   ```bash
   cd Backend
   npm install
   npm start
   ```

3. In a new terminal, navigate to frontend and start dev server:
   ```bash
   cd foodmart
   npm install
   npm run dev
   ```

4. Access at `http://localhost:5173` (frontend) and `http://localhost:5000/api` (backend)

## Troubleshooting

### Backend Not Connecting to MongoDB
- Verify MONGO_URI in Vercel environment variables
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for Vercel)
- Ensure connection string has correct username and password

### Frontend Not Calling Backend
- Check VITE_API_URL environment variable in Vercel
- Ensure URL ends with `/api` for API calls
- Clear browser cache and redeploy

### CORS Errors
- Backend already has CORS enabled
- If issues persist, check that API_BASE_URL uses full domain

## File Structure

```
Food_Mart/
├── Backend/          # Node.js Express API (Serverless on Vercel)
│   ├── vercel.json   # Vercel serverless configuration
│   ├── .env          # Environment variables (not committed)
│   └── server.js     # Express app
├── foodmart/         # React Frontend (Customer App)
│   ├── vercel.json   # Vercel static deployment config
│   ├── .env          # Environment variables
│   └── src/
├── Admin/            # React Admin Dashboard
│   ├── vercel.json   # Vercel static deployment config
│   ├── .env          # Environment variables
│   └── src/
└── vercel.json       # Root configuration for monorepo
```

## Security Notes

- Never commit `.env` files
- Use Vercel's environment variables for sensitive data
- MongoDB password should be strong
- Consider restricting IP access in MongoDB Atlas for production
