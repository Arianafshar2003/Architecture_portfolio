import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';

export function FeaturedProjectsSection() {
  return (
    <section className="scroll-snap-section flex items-center bg-secondary/30">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            پروژه‌های برتر
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           منتخبی از پروژه های من
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    مشاهده پروژه
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/works" className="gap-2">
              مشاهده همه پروژه‌ها
              <ArrowLeft size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
