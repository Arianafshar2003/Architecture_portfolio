import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoPng from "@/assets/logo.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "رزومه" },
  { href: "/works", label: "پروژه‌ها" },
  { href: "/certifications", label: "فعالیت مهندسان مشاور" },
  { href: "/concept", label: "کانسپت‌های طراحی" },
  { href: "/resume", label: "ارتباط با من" },
];

interface NavigationProps {
  customScrolled?: boolean;
}

export function Navigation({ customScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isHome = location.pathname === "/";
  const isScrolled =
    customScrolled !== undefined ? customScrolled : internalScrolled;

  const isSidebarMode = isHome && !isScrolled && !isMobile;

  useEffect(() => {
    if (customScrolled === undefined) {
      const handleScroll = () => setInternalScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [customScrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        layout={!isMobile}
        className={`fixed z-[100] bg-white/95 backdrop-blur-xl border-slate-100 shadow-sm
          ${
            isSidebarMode
              ? "hidden md:flex top-0 right-0 h-screen w-[280px] lg:w-[320px] border-l-2 flex-col pt-12"
              : "top-0 left-0 right-0 w-full h-20 border-b-2 flex-row items-center"
          }
          max-md:flex max-md:top-0 max-md:left-0 max-md:right-0 max-md:w-full max-md:h-16 max-md:border-b-2 max-md:flex-row max-md:items-center
        `}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          layout={!isMobile}
          className={`container mx-auto px-6 md:px-10 flex 
            ${
              isSidebarMode
                ? "flex-col h-full justify-start gap-12"
                : "flex-row h-full justify-between items-center"
            }
            max-md:flex-row max-md:justify-between max-md:h-full max-md:gap-0
          `}
        >
          {/* ۱. لوگو */}
          <Link
            to="/"
            className={`flex items-center justify-center group z-50 ${isSidebarMode ? "mb-6" : "shrink-0"}`}
          >
            <motion.img
              layout={!isMobile}
              src={logoPng}
              alt="Logo"
              className={`drop-shadow-md filter brightness-95 group-hover:brightness-110
                ${
                  isSidebarMode
                    ? "h-40 w-40 lg:h-48 lg:w-48 rounded-none object-contain"
                    : "h-14 w-auto rounded-none object-contain"
                }
                max-md:h-10 max-md:w-auto
              `}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Link>

          {/* ۲. لینک‌ها (دسکتاپ) */}
          <motion.div
            layout={!isMobile}
            className={`hidden md:flex items-center
              ${
                isSidebarMode
                  ? "flex-col gap-5 w-full px-6"
                  : "flex-row justify-evenly flex-grow px-8 lg:px-16"
              }
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-black relative py-2 uppercase group transition-colors duration-300 whitespace-nowrap
                  ${
                    isSidebarMode
                      ? "text-[16px] lg:text-[18px] tracking-[0.1em] w-full text-right border-b border-slate-100 pb-3 hover:pl-2"
                      : "text-[16px] lg:text-[17px] tracking-[0.1em]"
                  }
                  ${
                    location.pathname === link.href
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }
                `}
              >
                <motion.span layout={!isMobile} className="relative z-10 block">
                  {link.label}
                </motion.span>

                {!isSidebarMode && location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNavHorizontal"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}

                {isSidebarMode && location.pathname === link.href && (
                  <motion.span
                    layoutId="activeNavVertical"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </motion.div>

          {/* ۳. دکمه موبایل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* منوی موبایل (تغییر یافته به تم سبز) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // تغییر پس‌زمینه به bg-primary (سبز)
            className="fixed top-0 left-0 right-0 bottom-0 z-[110] bg-primary md:hidden"
          >
            <div className="flex justify-between items-center h-16 px-6 border-b border-white/10">
              <button
                onClick={() => setIsOpen(false)}
                // تغییر رنگ آیکون بستن به سفید
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={32} />
              </button>

              {/* اضافه کردن پس‌زمینه سفید کوچک به لوگو برای دیده شدن روی سبز */}
              <div className="bg-white p-1 rounded-md">
                <img
                  src={logoPng}
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <nav className="flex flex-col py-8 px-8 gap-6 text-right" dir="rtl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    // تغییر رنگ متن‌ها به سفید
                    className={`text-xl font-black tracking-tighter transition-colors ${
                      location.pathname === link.href
                        ? "text-white" // لینک فعال: سفید کامل
                        : "text-white/70 hover:text-white" // لینک غیرفعال: سفید شفاف
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
