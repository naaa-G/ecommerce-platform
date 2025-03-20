// Import i18next and react-i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define translations
const resources = {
  en: {
    translation: {
      products: "Products",
      cart: "Cart",
      addToCart: "Add to Cart",
      checkout: "Checkout",
      cartEmpty: "Cart is empty",
      paymentSuccess: "Payment successful",
    },
  },
  fa: {
    translation: {
      products: "محصولات",
      cart: "سبد خرید",
      addToCart: "افزودن به سبد خرید",
      checkout: "پرداخت",
      cartEmpty: "سبد خرید خالی است",
      paymentSuccess: "پرداخت با موفقیت انجام شد",
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources, // Load translations
  lng: "fa", // Default to Persian (changed from "en")
  interpolation: {
    escapeValue: false, // React escapes by default
  },
});

// Export i18n instance
export default i18n;
