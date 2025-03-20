// Import React hooks and dependencies
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useCart } from "./context/CartContext.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const toPersianNumber = (number) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number)
    .split("")
    .map((x) => persianNumbers[x] || x)
    .join("");
};

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    console.log("useEffect is running");
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    const fetchProducts = async () => {
      try {
        // Use import.meta.env for Vite, fallback to local URL
        const apiUrl =
          window.location.hostname === "localhost"
            ? "http://localhost:5000/api/products"
            : "/api/products";
        console.log("Fetching from:", apiUrl);
        const response = await axios.get(apiUrl);
        console.log("Products fetched:", response.data);
        setProducts(response.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [language]);

  const handleCheckout = () => {
    alert(
      language === "en"
        ? "Payment successful! Thank you for your purchase."
        : "پرداخت با موفقیت انجام شد! از خرید شما متشکریم."
    );
    cart.forEach((item) => removeFromCart(item._id));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: language === "fa",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-border-color">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              {language === "en" ? "E-Commerce Store" : "فروشگاه آنلاین"}
            </h1>
            <div className="flex items-center gap-4">
              <div
                className={`language-dropdown ${
                  isDropdownOpen ? "active" : ""
                }`}
                ref={dropdownRef}
              >
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {language === "en" ? "English" : "فارسی"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="language-options">
                  <div
                    className={`language-option ${
                      language === "en" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("en")}
                    data-lang="en"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    English
                  </div>
                  <div
                    className={`language-option ${
                      language === "fa" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("fa")}
                    data-lang="fa"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                    فارسی
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Products" : "محصولات"}
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {language === "en"
              ? "Discover our collection of premium products"
              : "مجموعه محصولات برتر ما را کشف کنید"}
          </p>
        </section>

        {/* Products Section */}
        <section className="mb-12">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="slick-container">
                <Slider {...sliderSettings}>
                  {products.map((product) => {
                    const cartItem = cart.find(
                      (item) => item._id === product._id
                    );
                    const quantity = cartItem ? cartItem.quantity : 0;
                    return (
                      <div key={product._id}>
                        <div className="card product-card">
                          <div className="product-image">
                            <img
                              src={product.image}
                              alt={
                                language === "en"
                                  ? product.nameEn
                                  : product.nameFa
                              }
                            />
                            <div className="product-overlay" />
                          </div>
                          <div className="product-info">
                            <h3 className="product-title">
                              {language === "en"
                                ? product.nameEn
                                : product.nameFa}
                            </h3>
                            <p className="product-price">
                              {product.price.toLocaleString(
                                language === "fa" ? "fa-IR" : "en-US"
                              )}
                              {language === "fa" ? " ریال" : " IRR"}
                            </p>
                            <p className="product-description">
                              {language === "en"
                                ? product.descriptionEn
                                : product.descriptionFa}
                            </p>
                            {quantity > 0 ? (
                              <div className="quantity-controls">
                                <button
                                  onClick={() =>
                                    updateQuantity(product._id, quantity - 1)
                                  }
                                  className="quantity-btn"
                                >
                                  -
                                </button>
                                <span className="quantity-display">
                                  {language === "fa"
                                    ? toPersianNumber(quantity)
                                    : quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(product._id, quantity + 1)
                                  }
                                  className="quantity-btn"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => addToCart(product)}
                                className="btn btn-primary w-full"
                              >
                                {language === "en"
                                  ? "Add to Cart"
                                  : "افزودن به سبد خرید"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          )}
        </section>

        {/* Cart Section */}
        <section className="card animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {language === "en" ? "Shopping Cart" : "سبد خرید"}
              </h2>
              {cart.length === 0 ? (
                <p
                  className="text-center"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {language === "en"
                    ? "Your cart is empty"
                    : "سبد خرید خالی است"}
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item._id} className="cart-item animate-slideIn">
                      <div className="cart-item-image">
                        <img
                          src={item.image}
                          alt={language === "en" ? item.nameEn : item.nameFa}
                        />
                      </div>
                      <div className="cart-item-info">
                        <h3 className="cart-item-title">
                          {language === "en" ? item.nameEn : item.nameFa}
                        </h3>
                        <p className="cart-item-price">
                          {item.price.toLocaleString(
                            language === "fa" ? "fa-IR" : "en-US"
                          )}{" "}
                          {language === "fa" ? "ریال" : "IRR"}
                        </p>
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity - 1)
                            }
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity-display">
                            {language === "fa"
                              ? toPersianNumber(item.quantity)
                              : item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.quantity + 1)
                            }
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleCheckout}
                    className="btn btn-primary w-full mt-6"
                  >
                    {language === "en" ? "Checkout" : "پرداخت"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            {language === "en" ? "Created by " : "ساخته شده توسط "}
            <a
              href="https://github.com/naaa-G"
              target="_blank"
              rel="noopener noreferrer"
            >
              naaa-G
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
