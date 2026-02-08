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
        {/* ۱. تصویر پروفایل (گرد و رنگی) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated p-2 bg-background/50 backdrop-blur-sm">
            <img
              src={profileImage}
              alt="افشین افشار"
              className="w-full h-full object-cover rounded-full" // بدون کلاس grayscale
            />
          </div>
        </motion.div>

        {/* ۲. محتوای متنی (وسط‌چین) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-2xl lg:text-4xl font-bold text-foreground mb-4"
          >
            افشین افشار
          </motion.h1>

          {/* خط تزئینی (وسط‌چین شده با mx-auto) */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1.5 bg-primary mb-6 mx-auto rounded-full"
          />

          <p className="text-xl lg:text-3xl text-primary font-medium mb-6">
            مهندس معمار
          </p>

          {/* ۳. ادغام سابقه کار در توضیحات */}
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-10 font-medium">
            طرح، نظارت و اجرا
            <span className="mx-3 text-primary/40">|</span>
            <span className="text-foreground font-bold">
              با +۲۸ سال سابقه درخشان حرفه‌ای
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 group text-lg px-8 h-12">
              <Link to="/works">
                مشاهده پروژه‌ها
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 h-12"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
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
