# Modern E-commerce Platform

<div align="center">

A modern, responsive e-commerce platform with bilingual support (English/Persian) and a beautiful dark theme UI.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF.svg)](https://vitejs.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4.0-47A248.svg)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Platform-000000.svg)](https://vercel.com)

</div>

## ✨ Features

- 🌐 **Bilingual Support (English/Persian)**
- 🌙 **Modern Dark Theme**
- 🛒 **Shopping Cart Functionality**
- 🎨 **Responsive Design**
- 🔄 **Real-time Product Updates**
- 🎯 **Smooth Animations**
- 📱 **Mobile-Friendly**

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Slick Carousel
- Context API
- Vite (Frontend Build Tool)

### Backend
- MongoDB
- Express
- Node.js

### Deployment
- Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/naaa-G/ecommerce-platform.git
cd ecommerce-platform
```

2. **Install server dependencies**:
```bash
cd server
npm install
```

3. **Install client dependencies**:
```bash
cd ../client
npm install
```

4. **Configure environment variables**:

Create `client/.env` for local development:
```env
# Leave VITE_VERCEL undefined or commented out for local development
# VITE_VERCEL=1  # Uncomment this to simulate Vercel locally
```

Create `server/.env` for MongoDB:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.j2cvx.mongodb.net/?retryWrites=true&w=majority
```

5. **Start the servers**:
```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```

## 🌐 Deployment

### Local Development
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/products

### Vercel Deployment

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Import repository
   - Configure build settings:
     - Framework Preset: Vite
     - Root Directory: client
     - Build Command: `npm run build`
     - Output Directory: dist
   - Add environment variables:
     ```env
     VITE_VERCEL=1
     MONGO_URI=<your-mongo-uri>
     ```
   - Click "Deploy"

3. **Configure Vercel routing**:

Create `vercel.json` in the root:
```json
{
  "version": 2,
  "builds": [
    {"src": "client/package.json", "use": "@vercel/static-build", "config": {"distDir": "dist"}},
    {"src": "server/index.js", "use": "@vercel/node"}
  ],
  "routes": [
    {"src": "/api/(.*)", "dest": "/server/index.js"},
    {"src": "/(.*)", "dest": "/client/dist/index.html"}
  ]
}
```

4. **Access your app**:
   - URL: https://your-project-name.vercel.app
   - API endpoint: https://your-project-name.vercel.app/api/products

## 📝 Notes

- **Local Development**: No need to modify App.jsx—the API URL is dynamically set based on VITE_VERCEL.
- **Vercel**: Ensure VITE_VERCEL=1 is set in Vercel's environment variables to use the production API path.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-@naaa--G-181717.svg?logo=github)](https://github.com/naaa-G)
[![Email](https://img.shields.io/badge/Email-atiar.yaser@gmail.com-D14836.svg?logo=gmail)](mailto:atiar.yaser@gmail.com)

Made with ❤️ by naaa-G

</div>

---

# پلتفرم فروشگاه آنلاین مدرن

<div align="center">

یک پلتفرم فروشگاه آنلاین مدرن و واکنش‌گرا با پشتیبانی دو زبانه (انگلیسی/فارسی) و رابط کاربری زیبا با تم تاریک.

</div>

## ✨ ویژگی‌ها

- 🌐 **پشتیبانی دو زبانه (انگلیسی/فارسی)**
- 🌙 **تم تاریک مدرن**
- 🛒 **عملکرد سبد خرید**
- 🎨 **طراحی واکنش‌گرا**
- 🔄 **به‌روزرسانی محصولات در زمان واقعی**
- 🎯 **انیمیشن‌های روان**
- 📱 **سازگار با موبایل**

## 🛠️ فناوری‌های استفاده شده

### فرانت‌اند
- React.js
- Tailwind CSS
- Axios
- React Slick Carousel
- Context API
- Vite (ابزار ساخت فرانت‌اند)

### بک‌اند
- MongoDB
- Express
- Node.js

### استقرار
- Vercel

## 🚀 شروع کار

### پیش‌نیازها

- Node.js (نسخه ۱۴ یا بالاتر)
- npm یا yarn
- MongoDB (برای بک‌اند)

### نصب

۱. **کلون کردن مخزن**:
```bash
git clone https://github.com/naaa-G/ecommerce-platform.git
cd ecommerce-platform
```

۲. **نصب وابستگی‌های سرور**:
```bash
cd server
npm install
```

۳. **نصب وابستگی‌های کلاینت**:
```bash
cd ../client
npm install
```

۴. **تنظیم متغیرهای محیطی**:

فایل `client/.env` را برای توسعه محلی ایجاد کنید:
```env
# برای توسعه محلی، VITE_VERCEL را تعریف نکنید یا کامنت کنید
# VITE_VERCEL=1  # برای شبیه‌سازی Vercel محلی، این خط را از کامنت خارج کنید
```

فایل `server/.env` را برای MongoDB ایجاد کنید:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.j2cvx.mongodb.net/?retryWrites=true&w=majority
```

۵. **شروع سرورها**:
```bash
# ترمینال ۱ - بک‌اند
cd server
npm start

# ترمینال ۲ - فرانت‌اند
cd client
npm run dev
```

## 🌐 استقرار

### توسعه محلی
- فرانت‌اند: http://localhost:5173
- API بک‌اند: http://localhost:5000/api/products

### استقرار در Vercel

۱. **ارسال به GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

۲. **استقرار در Vercel**:
   - به [Vercel](https://vercel.com) بروید
   - با GitHub وارد شوید
   - مخزن را وارد کنید
   - تنظیمات ساخت را پیکربندی کنید:
     - تنظیمات پیش‌فرض فریم‌ورک: Vite
     - دایرکتوری ریشه: client
     - دستور ساخت: `npm run build`
     - دایرکتوری خروجی: dist
   - متغیرهای محیطی را اضافه کنید:
     ```env
     VITE_VERCEL=1
     MONGO_URI=<your-mongo-uri>
     ```
   - روی "Deploy" کلیک کنید

۳. **تنظیم مسیرهای Vercel**:

فایل `vercel.json` را در ریشه ایجاد کنید:
```json
{
  "version": 2,
  "builds": [
    {"src": "client/package.json", "use": "@vercel/static-build", "config": {"distDir": "dist"}},
    {"src": "server/index.js", "use": "@vercel/node"}
  ],
  "routes": [
    {"src": "/api/(.*)", "dest": "/server/index.js"},
    {"src": "/(.*)", "dest": "/client/dist/index.html"}
  ]
}
```

۴. **دسترسی به برنامه**:
   - آدرس: https://your-project-name.vercel.app
   - نقطه پایان API: https://your-project-name.vercel.app/api/products

## 📝 نکات

- **توسعه محلی**: نیازی به تغییر App.jsx نیست - آدرس API به صورت پویا بر اساس VITE_VERCEL تنظیم می‌شود.
- **Vercel**: اطمینان حاصل کنید که VITE_VERCEL=1 در متغیرهای محیطی Vercel تنظیم شده است تا از مسیر API تولید استفاده شود.

## 🤝 مشارکت

مشارکت‌ها مورد استقبال هستند! لطفاً آزادانه درخواست Pull Request ارسال کنید.

## 👤 نویسنده

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-@naaa--G-181717.svg?logo=github)](https://github.com/naaa-G)
[![Email](https://img.shields.io/badge/Email-atiar.yaser@gmail.com-D14836.svg?logo=gmail)](mailto:atiar.yaser@gmail.com)

ساخته شده با ❤️ توسط naaa-G

</div>
