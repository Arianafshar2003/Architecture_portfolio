import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Briefcase, Award, ListChecks, ZoomIn, X } from "lucide-react";

// --- ۱. بخش وارد کردن تصاویر (Image Imports) ---
import certImage from "@/assets/projects/govahi/1.jpg";

// تصاویر بخش پروژه‌های کار شده
import work1 from "@/assets/projects/proj_abadboom/1.JPG";
import work2 from "@/assets/projects/proj_abadboom/2.JPG";
import work3 from "@/assets/projects/proj_abadboom/3.JPG";
import work4 from "@/assets/projects/proj_abadboom/4.JPG";
import work5 from "@/assets/projects/proj_abadboom/5.JPG";
import work6 from "@/assets/projects/proj_abadboom/6.JPG";
import work7 from "@/assets/projects/proj_abadboom/7.JPG";
import work8 from "@/assets/projects/proj_abadboom/8.JPG";
import work9 from "@/assets/projects/proj_abadboom/9.JPG";
import work10 from "@/assets/projects/proj_abadboom/10.JPG";
import work11 from "@/assets/projects/proj_abadboom/11.JPG";
import work12 from "@/assets/projects/proj_abadboom/12.JPG";
import work13 from "@/assets/projects/proj_abadboom/13.JPG";
import work14 from "@/assets/projects/proj_abadboom/14.JPG";
import work15 from "@/assets/projects/proj_abadboom/15.JPG";
import work16 from "@/assets/projects/proj_abadboom/16.JPG";
import work17 from "@/assets/projects/proj_abadboom/17.JPG";
import work18 from "@/assets/projects/proj_abadboom/18.JPG";
import work19 from "@/assets/projects/proj_abadboom/19.JPG";
import work20 from "@/assets/projects/proj_abadboom/20.JPG";
import work21 from "@/assets/projects/proj_abadboom/21.JPG";

// تصاویر بخش لیست جامع (فقط تصویر)
import comp0 from "@/assets/projects/list_abadboom/0.jpg";
import comp1 from "@/assets/projects/list_abadboom/1.jpg";
import comp2 from "@/assets/projects/list_abadboom/2.jpg";
import comp3 from "@/assets/projects/list_abadboom/3.jpg";
import comp4 from "@/assets/projects/list_abadboom/4.jpg";
import comp5 from "@/assets/projects/list_abadboom/5.jpg";
import comp6 from "@/assets/projects/list_abadboom/6.jpg";

const workedProjectsImages = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
  work12,
  work13,
  work14,
  work15,
  work16,
  work17,
  work18,
  work19,
  work20,
  work21,
];
const comprehensiveListImages = [
  comp0,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background text-right" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-xl lg:text-4xl font-bold text-foreground mb-4">
              فعالیت من در شرکت مهندسان مشاور آبادبوم
            </h1>
            <p className="text-muted-foreground">
              سوابق حرفه‌ای و کاتالوگ تصویری
            </p>
          </motion.div>

          <Tabs defaultValue="projects" className="w-full max-w-6xl mx-auto">
            {/* --- اصلاح بخش تب‌ها برای موبایل --- */}
            <div className="flex justify-center mb-8 md:mb-12">
              <TabsList className="flex w-full max-w-2xl h-auto min-h-[3.5rem] bg-muted/50 p-1 rounded-2xl overflow-x-auto no-scrollbar justify-start md:justify-center">
                <TabsTrigger
                  value="projects"
                  className="rounded-xl gap-1.5 md:gap-2 flex-1 min-w-fit px-3 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  <Briefcase className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  پروژه‌های کار شده
                </TabsTrigger>

                <TabsTrigger
                  value="comprehensive"
                  className="rounded-xl gap-1.5 md:gap-2 flex-1 min-w-fit px-3 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  <ListChecks className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  لیست جامع کارها
                </TabsTrigger>

                <TabsTrigger
                  value="certificate"
                  className="rounded-xl gap-1.5 md:gap-2 flex-1 min-w-fit px-3 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  <Award className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  گواهی
                </TabsTrigger>
              </TabsList>
            </div>

            {/* --- بخش ۱: پروژه‌های کار شده --- */}
            <TabsContent value="projects">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {workedProjectsImages.map((src, index) => (
                  <motion.div key={index} className="break-inside-avoid">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="group relative cursor-zoom-in overflow-hidden rounded-2xl shadow-md border border-slate-100 transition-all duration-300 hover:shadow-xl">
                          <img
                            src={src}
                            className="w-full h-auto block object-cover"
                            alt="Project"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 text-white">
                              <ZoomIn size={32} />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-none h-full max-h-none translate-x-[-50%] translate-y-[-50%] gap-4 border-none bg-black/95 p-0 shadow-none duration-200 sm:rounded-none md:w-full">
                        <DialogClose className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
                          <X size={32} />
                          <span className="sr-only">بستن</span>
                        </DialogClose>

                        <div
                          className="w-full h-full flex items-center justify-center p-4 md:p-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={src}
                            className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl"
                            alt="Full view"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* --- بخش ۲: لیست جامع (فقط تصاویر) --- */}
            <TabsContent value="comprehensive">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {comprehensiveListImages.map((src, index) => (
                  <motion.div key={index} className="break-inside-avoid">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="group relative cursor-zoom-in overflow-hidden rounded-2xl shadow-card bg-muted transition-all duration-300 hover:shadow-xl border border-slate-100">
                          <img
                            src={src}
                            className="w-full h-auto block object-cover"
                            alt={`Comp item ${index + 1}`}
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/30 text-white">
                              <ZoomIn size={32} />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-none h-full max-h-none translate-x-[-50%] translate-y-[-50%] gap-4 border-none bg-black/95 p-0 shadow-none duration-200 sm:rounded-none md:w-full">
                        <DialogClose className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
                          <X size={32} />
                          <span className="sr-only">بستن</span>
                        </DialogClose>

                        <div
                          className="w-full h-full flex items-center justify-center p-4 md:p-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={src}
                            className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl"
                            alt="Full View"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* --- بخش ۳: گواهی --- */}
            <TabsContent value="certificate">
              <div className="max-w-4xl mx-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-4 border-white shadow-elevated bg-muted transition-all duration-300 hover:shadow-xl">
                      <img
                        src={certImage}
                        className="w-full h-auto block"
                        alt="Certificate"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 text-white">
                          <ZoomIn size={40} />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-none h-full max-h-none translate-x-[-50%] translate-y-[-50%] gap-4 border-none bg-black/95 p-0 shadow-none duration-200 sm:rounded-none md:w-full">
                    <DialogClose className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
                      <X size={32} />
                      <span className="sr-only">بستن</span>
                    </DialogClose>

                    <div
                      className="w-full h-full flex items-center justify-center p-4 md:p-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={certImage}
                        className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl"
                        alt="Certificate Full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certifications;
