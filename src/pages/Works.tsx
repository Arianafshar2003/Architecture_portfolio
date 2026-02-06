import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { projects, categories } from "@/data/projects";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              پروژه‌ها
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              مجموعه‌ای از پروژه‌های طراحی شده در سال‌های اخیر
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/works/${project.slug}`}
                    className="group block bg-card rounded-xl overflow-hidden shadow-card hover-lift"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {project.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        مشاهده جزئیات
                        <ArrowLeft
                          size={16}
                          className="transition-transform group-hover:-translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Works;
