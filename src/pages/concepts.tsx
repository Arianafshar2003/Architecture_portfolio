import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ZoomIn, Palette, X } from "lucide-react";

// Import your concept images here
import con_1 from "@/assets/projects/concepts/2.JPG";
import con_2 from "@/assets/projects/concepts/3.JPG";
import con_3 from "@/assets/projects/concepts/4.JPG";
import con_4 from "@/assets/projects/concepts/5.JPG";
import con_5 from "@/assets/projects/concepts/6.JPG";
import con_6 from "@/assets/projects/concepts/7.JPG";
import con_7 from "@/assets/projects/concepts/8.JPG";
import con_8 from "@/assets/projects/concepts/9.JPG";
import con_9 from "@/assets/projects/concepts/10.JPG";
import con_10 from "@/assets/projects/concepts/15.PNG";
import con_11 from "@/assets/projects/concepts/16.PNG";
import con_12 from "@/assets/projects/concepts/17.PNG";
import con_13 from "@/assets/projects/concepts/18.PNG";
import con_14 from "@/assets/projects/concepts/19.PNG";
import con_16 from "@/assets/projects/concepts/21.JPG";
import con_17 from "@/assets/projects/concepts/22.JPG";
import con_18 from "@/assets/projects/concepts/24.JPG";
import con_19 from "@/assets/projects/concepts/25.JPG";

const conceptImages = [
  con_1,
  con_2,
  con_3,
  con_4,
  con_5,
  con_6,
  con_7,
  con_8,
  con_9,
  con_10,
  con_11,
  con_12,
  con_13,
  con_14,
  con_16,
  con_17,
  con_18,
  con_19,
];

const Concepts = () => {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Palette size={32} strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tighter">
              کانسپت‌های طراحی
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-slate-500 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              مجموعه‌ای از ایده‌های اولیه و طرح‌های سه‌بعدی.
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {conceptImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="break-inside-avoid"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-slate-100 transition-all duration-300">
                      <img
                        src={src}
                        alt={`Concept ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 text-white">
                          <ZoomIn size={28} />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* --- اصلاح مهم برای فیت شدن تصاویر عمودی --- */}
                  <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-none h-full max-h-none translate-x-[-50%] translate-y-[-50%] border-none bg-black/95 p-0 shadow-none duration-200">
                    <DialogClose className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
                      <X size={32} />
                    </DialogClose>

                    <div
                      className="w-full h-full flex items-center justify-center p-4 md:p-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={src}
                        alt="Full size"
                        // تغییر کلیدی: max-h-[95vh] و object-contain باعث می‌شود تصویر عمودی در صفحه جا شود
                        className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Concepts;
