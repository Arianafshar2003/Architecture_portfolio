import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Calendar,
  Maximize2,
  ZoomIn, // اضافه شده
  X, // اضافه شده
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
// اضافه کردن DialogClose به ایمپورت‌ها
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const WorkDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            پروژه یافت نشد
          </h1>
          <Button asChild>
            <Link to="/works">بازگشت به پروژه‌ها</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowRight size={16} />
              بازگشت به پروژه‌ها
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {project.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar size={14} />
                {project.year}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin size={14} />
                {project.location}
              </span>
              {project.area && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Maximize2 size={14} />
                  {project.area}
                </span>
              )}
            </div>

            <h1 className="text-xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-md text-muted-foreground max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>
        </section>

        {/* Modern Masonry Gallery */}
        <section className="container mx-auto px-6 mb-16">
          <h2 className="text-xl font-bold text-foreground mb-8">
            گالری تصاویر
          </h2>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        // حذف افکت زوم روی خود عکس در حالت هاور برای جلوگیری از بهم ریختگی
                        className="w-full h-auto block object-cover"
                      />

                      {/* لایه هاور با آیکون ذره‌بین */}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ZoomIn size={28} />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* محتوای مودال: تمام صفحه، پس‌زمینه تیره و دکمه بستن */}
                  <DialogContent className="fixed left-[50%] top-[50%] z-[200] grid w-full max-w-none h-full max-h-none translate-x-[-50%] translate-y-[-50%] gap-4 border-none bg-black/95 p-0 shadow-none duration-200 sm:rounded-none md:w-full">
                    {/* دکمه بستن */}
                    <DialogClose className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer">
                      <X size={32} />
                      <span className="sr-only">بستن</span>
                    </DialogClose>

                    <div
                      className="w-full h-full flex items-center justify-center p-4 md:p-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={image}
                        className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl"
                        alt="Full view"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="container mx-auto px-6">
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prevProject ? (
              <Link
                to={`/works/${prevProject.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
                <div>
                  <span className="text-xs block mb-1">پروژه قبلی</span>
                  <span className="font-medium text-foreground">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/works/${nextProject.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group text-left"
              >
                <div>
                  <span className="text-xs block mb-1">پروژه بعدی</span>
                  <span className="font-medium text-foreground">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;
