import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section className="scroll-snap-section relative flex items-center justify-center gradient-hero overflow-hidden h-screen">
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">
        {/* ۱. تصویر پروفایل */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 lg:mb-12"
        >
          <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-200">
            <img
              src={profileImage}
              alt="افشین افشار"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* ۲. محتوای متنی (اصلاح شده به صورت زیر هم) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl flex flex-col items-center gap-3 lg:gap-5" // فاصله بین خطوط
        >
          {/* نام */}
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            AFSHIN AFSHAR
          </h1>

          {/* عنوان شغلی (رنگ اصلی/سرمه‌ای) */}
          <h2 className="text-xl lg:text-xl text-primary font-bold">
            ARCHITECT
          </h2>

          {/* سابقه کار */}
          <p className="text-xl lg:text-2xl text-slate-800 font-bold mt-2">
            ۲۸+ سال سابقه حرفه‌ای
          </p>

          {/* خدمات */}
          <p className="text-lg lg:text-2xl text-slate-500 font-medium mb-8">
            طرح، نظارت و اجرا
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="gap-2 group text-lg px-8 h-14 rounded-xl shadow-lg shadow-primary/20"
            >
              <Link to="/works">
                مشاهده پروژه‌ها
                <ArrowLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 h-14 rounded-xl border-slate-300 hover:bg-slate-50 text-slate-700"
            >
              <Link to="/about">درباره من</Link>
            </Button>
          </div>
        </motion.div>

        {/* نشانگر اسکرول */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={onScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium uppercase tracking-widest hidden md:block">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
