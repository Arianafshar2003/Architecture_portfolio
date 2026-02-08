import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, ArrowLeft } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-20 min-h-[80vh] flex flex-col justify-center">
        <div className="container mx-auto px-6">
          {/* بخش هدر و توضیحات */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-2xl lg:text-4xl font-black text-slate-900 mb-8 tracking-tighter">
              ارتباط با من
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />

            {/* توضیح کوتاه و متنی */}
            <p className="text-slate-500 text-md lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              برای همکاری در زمینه معماری، طراحی داخلی و نظارت بر اجرا، یا جهت
              هماهنگی جلسات حضوری، می‌توانید از طریق ایمیل و شماره تماس زیر
              اقدام نمایید.
              <br className="hidden md:block" />
              <span className="text-slate-800 font-bold mt-2 block">
                همچنین در پیام‌رسان‌های واتساپ، تلگرام، بله و روبیکا نیز با همین
                شماره پاسخگوی شما هستم.
              </span>
            </p>
          </motion.div>

          {/* کارت‌های تماس (ایمیل و تلفن) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* کارت ایمیل */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
              <div className="p-5 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform mb-6 text-primary">
                <Mail size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ایمیل مستقیم
              </h3>
              <p className="text-slate-500 mb-6 text-sm">
                پاسخگویی در سریع‌ترین زمان ممکن
              </p>
              <a
                href="mailto:a.afshar.design@gmail.com"
                className="text-md lg:text-xl font-mono text-slate-800 hover:text-primary transition-colors flex items-center gap-2 border-b-2 border-transparent hover:border-primary pb-1"
              >
                a.afshar.design@gmail.com
                <ArrowLeft size={18} />
              </a>
            </div>

            {/* کارت شماره تماس */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
              <div className="p-5 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform mb-6 text-primary">
                <Phone size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                شماره تماس
              </h3>
              <p className="text-slate-500 mb-6 text-sm">
                شنبه تا پنجشنبه (ساعات کاری)
              </p>
              <a
                href="tel:+989123381464"
                className="text-md lg:text-xl font-mono text-slate-800 hover:text-primary transition-colors flex items-center gap-2 border-b-2 border-transparent hover:border-primary pb-1"
                dir="ltr"
              >
                0912 338 1464
                <ArrowLeft size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
