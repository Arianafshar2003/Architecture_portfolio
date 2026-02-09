import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export const MobileScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScrollAndResize = () => {
      // ۱. بررسی اینکه آیا صفحه اصلا اسکرول دارد یا نه
      const hasScroll =
        document.documentElement.scrollHeight > window.innerHeight;

      // ۲. بررسی اینکه کاربر چقدر اسکرول کرده (اگر بیشتر از ۵۰ پیکسل رفت پایین، محو شود)
      const isAtTop = window.scrollY < 50;

      // نمایش فقط اگر اسکرول دارد و در بالای صفحه است
      setIsVisible(hasScroll && isAtTop);
    };

    // اجرا در لحظه لود شدن و تغییر سایز یا اسکرول
    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);

    // کمی تاخیر برای لود شدن کامل صفحه و محاسبه ارتفاع
    setTimeout(handleScrollAndResize, 500);

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, [location.pathname]); // هر بار که صفحه عوض شد (مثلا رفتید به درباره ما) دوباره چک میکند

  // اگر در صفحه اصلی هستید، چون خودش هیرو سکشن دارد، شاید بخواهید این را نشان ندهید
  // اگر میخواهید در صفحه اصلی هم باشد، خط زیر را پاک کنید
  // if (location.pathname === "/") return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] md:hidden pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-1"
          >
            {/* دایره پس‌زمینه شیشه‌ای برای خوانایی روی هر عکسی */}
            <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center text-slate-800">
              <ArrowDown size={20} strokeWidth={2.5} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
