import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";

export function ConsultantSection() {
  return (
    <section className="scroll-snap-section flex items-center bg-secondary/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6"
          >
            <Building2 size={40} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            فعالیت در شرکت مهندسین مشاور آبادبوم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            بیش از ۱۵ سال سابقه درخشان در قالب مدیر پروژه و مسئولیت طراحی و
            نظارت بر پروژه‌های متنوع کشوری در شرکت آبادبوم.
          </motion.p>
          <Button asChild size="lg" variant="default" className="gap-2">
            <Link to="/certifications">
              مشاهده سوابق و گواهی‌ها
              <ArrowLeft size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
