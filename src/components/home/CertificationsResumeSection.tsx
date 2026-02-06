import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, ExternalLink, FileText, Award } from "lucide-react";
import { certifications, resumeData } from "@/data/certifications";
import { Button } from "@/components/ui/button";

export function CertificationsResumeSection() {
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
            رزومه و فعالیت ها
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 lg:p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">رزومه</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">
                  نام
                </h4>
                <p className="text-foreground">{resumeData.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">
                  عنوان
                </h4>
                <p className="text-foreground">{resumeData.title}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">
                  خلاصه
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  نرم‌افزارها
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.software.slice(0, 6).map((sw) => (
                    <span
                      key={sw}
                      className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/resume">مشاهده کامل</Link>
              </Button>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 lg:p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                گواهی‌ها
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {certifications.slice(0, 4).map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="دانلود گواهی"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full">
              <Link to="/certifications">مشاهده همه گواهی‌ها</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
