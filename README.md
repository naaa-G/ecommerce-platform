# E-Commerce Platform

A modern, responsive e-commerce platform built with React, Node.js, and MongoDB. Features a beautiful dark theme UI, bilingual support (English/Persian), and real-time cart management.

# پلتفرم تجارت الکترونیک

یک پلتفرم تجارت الکترونیک مدرن و واکنش‌گرا که با React، Node.js و MongoDB ساخته شده است. دارای رابط کاربری زیبا با تم تاریک، پشتیبانی دو زبانه (انگلیسی/فارسی) و مدیریت سبد خرید در زمان واقعی.

## Features | ویژگی‌ها

- 🌐 **Bilingual Support**: Full English and Persian language support with RTL layout
- 🛒 **Real-time Cart Management**: Add, remove, and update product quantities instantly
- 🎨 **Modern Dark Theme**: Sleek and eye-friendly dark mode interface
- 🔍 **Smart Search**: Real-time product search with instant results
- 📱 **Responsive Design**: Perfectly optimized for all device sizes
- 🎯 **Product Categories**: Organized product display with smooth carousel
- 💳 **Checkout Process**: Streamlined checkout with cart summary
- 🔄 **Dynamic UI**: Smooth transitions and animations
- 🎨 **Tailwind CSS**: Modern utility-first styling
- 🚀 **Vite**: Lightning-fast development and build times

- 🌐 **پشتیبانی دو زبانه**: پشتیبانی کامل از زبان‌های انگلیسی و فارسی با چیدمان RTL
- 🛒 **مدیریت سبد خرید در زمان واقعی**: افزودن، حذف و به‌روزرسانی تعداد محصولات به صورت آنی
- 🎨 **تم تاریک مدرن**: رابط کاربری زیبا و مناسب برای چشم
- 🔍 **جستجوی هوشمند**: جستجوی محصولات در زمان واقعی با نتایج فوری
- 📱 **طراحی واکنش‌گرا**: بهینه‌سازی شده برای تمام اندازه‌های دستگاه
- 🎯 **دسته‌بندی محصولات**: نمایش منظم محصولات با اسلایدر روان
- 💳 **فرآیند پرداخت**: پرداخت ساده با خلاصه سبد خرید
- 🔄 **رابط کاربری پویا**: انیمیشن‌ها و انتقال‌های روان
- 🎨 **Tailwind CSS**: استایل‌دهی مدرن با رویکرد utility-first
- 🚀 **Vite**: توسعه و ساخت سریع

## 🛠️ Tech Stack | فناوری‌های استفاده شده

### Frontend | فرانت‌اند
- ⚛️ React 18
- 🎨 Tailwind CSS
- 🎯 Vite
- 🎠 Slick Carousel
- 🌐 React Router
- 🎭 Context API

### Backend | بک‌اند
- 🚀 Node.js
- 🎯 Express.js
- 🗄️ MongoDB
- 🎭 Mongoose
- 🔒 CORS
- 📦 Nodemon

## 🚀 Getting Started | شروع کار

### Prerequisites | پیش‌نیازها
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation | نصب

۱. **Clone the repository | کلون کردن مخزن**:
```bash
git clone https://github.com/naaa-G/ecommerce-platform.git
cd ecommerce-platform
```

۲. **Install dependencies | نصب وابستگی‌ها**:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

۳. **Configure MongoDB | تنظیم MongoDB**:
- Create a MongoDB database (local or Atlas)
- Update the connection string in `server/index.js`

۴. **Start the servers | اجرای سرورها**:

# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```

۶. **Access the application | دسترسی به برنامه**:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/products

## 📝 Development Notes | نکات توسعه

- Make sure both frontend and backend servers are running simultaneously
- API URL is configured for local backend at http://localhost:5000
- All API requests should use the full URL: `axios.get("http://localhost:5000/api/products")`
- MongoDB can be run locally or via Atlas (cloud)

- اطمینان حاصل کنید که هر دو سرور فرانت‌اند و بک‌اند به طور همزمان در حال اجرا هستند
- آدرس API برای اتصال به بک‌اند محلی در http://localhost:5000 پیکربندی شده است
- هر درخواست API باید از URL کامل استفاده کند: `axios.get("http://localhost:5000/api/products")`
- MongoDB می‌تواند به صورت محلی یا از طریق Atlas (ابری) اجرا شود

## 🤝 Contributing | مشارکت

Contributions are welcome! Please feel free to submit a Pull Request.

مشارکت‌ها مورد استقبال هستند! لطفاً آزادانه درخواست Pull Request ارسال کنید.

## 👤 Author | نویسنده

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-@naaa--G-181717.svg?logo=github)](https://github.com/naaa-G)
[![Email](https://img.shields.io/badge/Email-atiar.yaser@gmail.com-D14836.svg?logo=gmail)](mailto:atiar.yaser@gmail.com)

Made with ❤️ by naaa-G

ساخته شده با ❤️ توسط naaa-G

</div>
