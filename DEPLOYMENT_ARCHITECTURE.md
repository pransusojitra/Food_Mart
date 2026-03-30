# Food Mart - Vercel Deployment Architecture

## 📋 Configuration Summary

All necessary files have been configured for production deployment on Vercel with MongoDB.

### Files Created/Modified:

#### 1. **Backend Configuration**
- ✅ `Backend/vercel.json` - Serverless API configuration
- ✅ `Backend/package.json` - Added start/dev scripts
- ✅ `Backend/.env.example` - Template for environment variables
- ✅ `Backend/.env` - Local development configuration (not committed)

#### 2. **Frontend (Customer App) Configuration**
- ✅ `foodmart/vercel.json` - Static SPA deployment config
- ✅ `foodmart/src/apiConfig.js` - Updated to use environment variables
- ✅ `foodmart/.env.example` - Template for environment variables
- ✅ `foodmart/.env` - Local development configuration (not committed)

#### 3. **Admin Dashboard Configuration**
- ✅ `Admin/vercel.json` - Static SPA deployment config
- ✅ `Admin/src/apiConfig.js` - Updated to use environment variables
- ✅ `Admin/.env.example` - Template for environment variables
- ✅ `Admin/.env` - Local development configuration (not committed)

#### 4. **Root Configuration**
- ✅ `vercel.json` - Monorepo configuration
- ✅ `DEPLOYMENT_GUIDE.md` - Complete deployment walkthrough
- ✅ `VERCEL_QUICK_START.md` - Quick reference guide

---

## 🏗️ Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL DEPLOYMENT                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────┐        ┌─────────────────────┐        │
│  │  Customer Frontend   │        │  Admin Dashboard    │        │
│  │  (React + Vite)      │        │  (React + Vite)     │        │
│  │  (Static Hosting)    │        │  (Static Hosting)   │        │
│  │                      │        │                     │        │
│  │ VITE_API_URL:────────│────┐   │ VITE_API_URL:───────│────┐  │
│  │ foodmart.vercel.app  │    │   │ admin.vercel.app    │    │  │
│  └─────────────────────┘    │   └─────────────────────┘    │  │
│                             │                               │  │
│  ┌────────────────────────────────────────────┐            │  │
│  │   Backend API (Express + Node.js)          │            │  │
│  │   (Serverless Functions)                   │            │  │
│  │   backend.vercel.app/api                   │◄───────────┘  │
│  │                                            │                │
│  │   API Routes:                              │                │
│  │   - /api/products (GET, POST, PUT, DELETE) │                │
│  │   - /api/auth (Login, Register)            │                │
│  │   - /api/orders (Create, Get Orders)       │                │
│  │                                            │                │
│  │   Environment Variables:                   │                │
│  │   - MONGO_URI (Atlas Connection)           │                │
│  │   - NODE_ENV = production                  │                │
│  └────────────────────────────────────────────┘                │
│           │                                                     │
│           │ (HTTPS)                                             │
│           ▼                                                     │
│  ┌─────────────────────────────────────────┐                   │
│  │  MongoDB Atlas (Cloud Database)          │                   │
│  │  - Connection: mongodb+srv://...         │                   │
│  │  - Database: foodmart                    │                   │
│  │  - Collections: products, users, orders  │                   │
│  └─────────────────────────────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:userId` - Get user's orders
- `GET /api/orders` - Get all orders (admin)
- `PUT /api/orders/:id` - Update order status (admin)

---

## 🔐 Environment Variables

### Backend (Vercel Settings)
```
MONGO_URI = mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/foodmart?retryWrites=true&w=majority
NODE_ENV = production
```

### Frontend & Admin (Vercel Settings)
```
VITE_API_URL = https://food-mart-backend.vercel.app/api
VITE_UPLOADS_URL = https://food-mart-backend.vercel.app
```

---

## 📦 Technology Stack

### Frontend & Admin
- **Framework**: React 19
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **Additional**: Bootstrap (Admin), Swiper (Frontend)
- **Hosting**: Vercel (Static)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Password**: bcryptjs
- **File Upload**: Multer
- **CORS**: Enabled for frontend access
- **Hosting**: Vercel (Serverless Functions)

### Database
- **Provider**: MongoDB Atlas (Cloud)
- **Type**: NoSQL Document Database
- **Collections**: 
  - `products` - Product catalog
  - `users` - User accounts
  - `orders` - Customer orders

---

## ✅ Pre-Deployment Checklist

- [x] Backend configured for Vercel serverless
- [x] Frontend configured for Vercel static hosting
- [x] API configuration uses environment variables
- [x] CORS enabled in backend
- [x] MongoDB Atlas connection ready
- [x] All routes properly configured
- [x] Authentication routes available
- [x] File upload endpoints configured
- [x] Error handling in place
- [x] Environment variables documented

---

## 🚀 Deployment Workflow

### 1. **Prepare MongoDB** (One-time setup)
   - Create MongoDB Atlas account
   - Create cluster (free tier available)
   - Create database user
   - Get connection string
   - Whitelist Vercel IPs (0.0.0.0/0 for simplicity)

### 2. **Deploy Backend**
   - Import GitHub repository to Vercel
   - Select Backend as root directory
   - Add MONGO_URI environment variable
   - Set NODE_ENV to production
   - Deploy

### 3. **Deploy Frontend**
   - Import GitHub repository to Vercel (new project)
   - Select foodmart as root directory
   - Add VITE_API_URL environment variable
   - Add VITE_UPLOADS_URL environment variable
   - Deploy

### 4. **Deploy Admin**
   - Import GitHub repository to Vercel (new project)
   - Select Admin as root directory
   - Add VITE_API_URL environment variable
   - Add VITE_UPLOADS_URL environment variable
   - Deploy

### 5. **Test Deployment**
   - Test customer registration/login at frontend
   - Test product browsing
   - Test add to cart functionality
   - Test admin dashboard
   - Test product management (create/edit/delete)
   - Test order management

---

## 📝 Files Modified

### API Configuration Files
```javascript
// foodmart/src/apiConfig.js & Admin/src/apiConfig.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const UPLOADS_BASE_URL = import.meta.env.VITE_UPLOADS_URL || 'http://localhost:5000';
```

### Backend Package.json
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  }
}
```

### Vercel Configuration Files
Each vercel.json file configures:
- Build command
- Output directory
- Environment variables
- Serverless routes (backend)
- SPA fallback (frontend/admin)

---

## 🔍 Verification Steps

After deployment:

1. **Test Backend**
   ```bash
   curl https://your-backend.vercel.app/api/products
   ```

2. **Test Frontend**
   - Navigate to https://your-frontend.vercel.app
   - Should load without errors
   - API calls should connect to backend

3. **Test Admin**
   - Navigate to https://your-admin.vercel.app
   - Should load without errors
   - API calls should connect to backend

4. **Test Database Connection**
   - Check Vercel logs for MongoDB connection message
   - Create a user (registration)
   - Verify user is saved in MongoDB Atlas

---

## 📚 Documentation

- **DEPLOYMENT_GUIDE.md** - Complete step-by-step guide
- **VERCEL_QUICK_START.md** - Quick reference
- **This file** - Architecture overview

---

## ⚠️ Important Notes

1. **MongoDB IP Whitelist**: Allow `0.0.0.0/0` for Vercel access
2. **Environment Variables**: Never commit `.env` files
3. **API URLs**: Must include full domain for CORS to work
4. **File Uploads**: Vercel serverless has temporary file storage; consider external storage for production
5. **Rate Limiting**: Consider adding rate limiting for production
6. **Authentication**: JWT tokens used for secure endpoints

---

## 🎯 Next Steps

1. Follow VERCEL_QUICK_START.md for immediate deployment
2. Set up MongoDB Atlas account
3. Deploy backend first
4. Deploy frontend and admin with backend URL
5. Test all functionality
6. Monitor Vercel logs for issues

Ready to deploy! 🚀
