import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb } from "lucide-react";

export function ConceptsSection() {
  return (
    <section className="scroll-snap-section flex items-center bg-transparent">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary mb-6"
          >
            <Lightbulb size={40} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            کانسپت های طراحی شده توسط من
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            کاوش در فضاهای انسانی، خلاق و پایدار از طریق طرح‌های کانسپت معماری
            به‌روز دنیا.
          </motion.p>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/concept">
              مشاهده گالری کانسپت‌ها
              <ArrowLeft size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
