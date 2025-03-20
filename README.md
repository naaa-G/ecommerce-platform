# Modern E-commerce Platform | پلتفرم فروشگاه آنلاین مدرن

A modern, responsive e-commerce platform with bilingual support (English/Persian) and a beautiful dark theme UI.

یک پلتفرم فروشگاه آنلاین مدرن و واکنش‌ گرا با پشتیبانی دو زبانه (انگلیسی/فارسی) و رابط کاربری زیبا با تم تاریک.

## Features | ویژگی‌ها

- 🌐 Bilingual Support (English/Persian) | پشتیبانی دو زبانه (انگلیسی/فارسی)
- 🌙 Modern Dark Theme | تم تاریک مدرن
- 🛒 Shopping Cart Functionality | عملکرد سبد خرید
- 🎨 Responsive Design | طراحی واکنش‌ گرا
- 🔄 Real-time Product Updates | به‌روزرسانی محصولات در زمان واقعی
- 🎯 Smooth Animations | انیمیشن‌های روان
- 📱 Mobile-Friendly | سازگار با موبایل

## Tech Stack | فناوری‌های استفاده شده

- React.js
- Tailwind CSS
- Axios
- React Slick Carousel
- Context API
- Vercel (Deployment)

## Prerequisites | پیش‌ نیازها

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend)

## Installation | نصب

1. Clone the repository | کلون کردن مخزن:
```bash
git clone https://github.com/naaa-G/ecommerce-platform.git
cd ecommerce-platform
```

2. Install dependencies | نصب وابستگی‌ها:
```bash
npm install
# or
yarn install
```

3. Configure API URL in App.jsx | تنظیم آدرس API در App.jsx:
   - For local development | برای توسعه محلی:
   ```jsx
   const response = await axios.get("http://localhost:5000/api/products");
   ```
   - For production (Vercel) | برای تولید (Vercel):
   ```jsx
   const response = await axios.get("/api/products");
   ```

4. Start the development server | شروع سرور توسعه:
```bash
npm run dev
# or
yarn dev
```

## Deployment | استقرار

### Local Deployment | استقرار محلی

1. Start the backend server | شروع سرور بک‌اند:
```bash
cd backend
npm install
npm start
```

2. Start the frontend development server | شروع سرور توسعه فرانت‌اند:
```bash
cd frontend
npm install
npm run dev
```

3. Access the application | دسترسی به برنامه:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Vercel Deployment | استقرار در Vercel

1. Push your code to GitHub | ارسال کد به GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Deploy on Vercel | استقرار در Vercel:
   - Go to [Vercel](https://vercel.com) | به [Vercel](https://vercel.com) بروید
   - Sign in with your GitHub account | با حساب GitHub خود وارد شوید
   - Click "New Project" | روی "New Project" کلیک کنید
   - Import your repository | مخزن خود را وارد کنید
   - Configure build settings | تنظیمات ساخت را پیکربندی کنید:
     - Framework Preset: Vite | تنظیمات پیش‌فرض فریم‌ورک: Vite
     - Build Command: `npm run build` | دستور ساخت: `npm run build`
     - Output Directory: `dist` | دایرکتوری خروجی: `dist`
   - Click "Deploy" | روی "Deploy" کلیک کنید

3. Configure API URL | تنظیم آدرس API:
   - After deployment, update the API URL in App.jsx to | پس از استقرار، آدرس API را در App.jsx به این صورت به‌روزرسانی کنید:
   ```jsx
   const response = await axios.get("/api/products");
   ```

4. Access your deployed application | دسترسی به برنامه مستقر شده:
- Your app will be available at | برنامه شما در این آدرس در دسترس خواهد بود:
  https://your-project-name.vercel.app

## Contributing | مشارکت

Contributions are welcome! Please feel free to submit a Pull Request.

مشارکت‌ها مورد استقبال هستند! لطفاً آزادانه درخواست Pull Request ارسال کنید.


## Author | نویسنده

- GitHub: [@naaa-G](https://github.com/naaa-G)
- Email: [atiar.yaser@gmail.com]

---

Made with ❤️ by naaa-G | ساخته شده با ❤️ توسط naaa-G 