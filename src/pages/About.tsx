import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { resumeData } from "@/data/certifications";
import {
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Languages,
} from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* ... (بخش‌های Hero و Story بدون تغییر) ... */}

        {/* بخش Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-elevated"
            >
              <img
                src={profileImage}
                alt={resumeData.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 text-center lg:text-right"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {resumeData.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {resumeData.title}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                {resumeData.summary}
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  {resumeData.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary" />
                  {resumeData.phone}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                درباره من
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  افشین افشار - مهندس معمار با بیش از ۲۸ سال سابقه کاری در زمینه
                  طراحی، نظارت، اجرا و فارغ‌التحصیل مقطع کارشناسی از دانشگاه
                  آزاد اسلامی تهران... اعتقاد دارم معماری زبان ارتباط انسان با
                  محیط است و انجام هر پروژه می‌تواند فرصتی باشد برای بازتعریف
                  کیفیت زیستن و تجربه کردن فضاهای معماری به‌روز دنیا. حرفه تخصصی
                  من طراحی نقشه‌های معماری ساختمان و فضاهای مختلف داخلی و خارجی
                  آن با کاربری‌های متفاوت است. از سال ۱۳۷۵ فعالیت‌های حرفه‌ای
                  خود را با همکاری در قالب تأسیس یک شرکت خصوصی به نام «مهندسین
                  مشاور آبادبوم» آغاز کردم و طی سال‌های ۱۳۷۵ تا ۱۳۹۰، با اخذ
                  رتبه معماری و شهرسازی از سازمان مدیریت و برنامه‌ریزی کشور و
                  ارتقای رتبه طی سالیان آتی، موفق به ارائه طرح و اجرای پروژه‌های
                  مختلف در کاربری‌های متنوع شدم. طی این ۱۵ سال، به‌عنوان مدیر
                  پروژه، مسئولیت طراحی و نظارت بر اجرای نقشه‌های معماری را بر
                  عهده داشته‌ام. تمرکزم همواره بر خلق فضاهایی بوده است که میان
                  زیبایی، عملکرد، اصالت فرهنگی و استانداردهای به‌روز دنیا تعادل
                  برقرار می‌کنند.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  تجربه کاری من از طراحی فاز صفر (کانسپت) تا نقشه‌های اجرایی با
                  ارائه جزئیات کامل و رعایت کلیه موارد فنی و مهندسی را شامل
                  می‌شود که با طراحی دکوراسیون و فضاهای داخلی مدرن، کلاسیک، سنتی
                  و مینیمال همراه بوده است. هدف من ارائه فضاهای انسانی، خلاق،
                  پایدار و منطبق بر سلایق مختلف کارفرمایان است. طی سال‌هایی که
                  در قالب مهندسین مشاور و به صورت شخص حقوقی فعالیت می‌کردم، موفق
                  به طراحی و اجرای پروژه‌های متعدد بزرگ و کوچک (شخصی و دولتی) در
                  اقصی نقاط کشور و با کاربری‌های مختلف شدم. پس از سال ۱۳۸۸، با
                  ایجاد ارتباطات مناسب و سالم با کارفرمایان خصوصی، سازمان‌های
                  عمرانی و دفاتر مهندسین مشاور مختلف ایران، فرصتی فراهم کردم تا
                  بتوانم فعالیت خود را به صورت شخص حقیقی نیز گسترش دهم. از سال
                  ۱۳۹۰ تاکنون نیز با طراحی و اجرای پروژه‌های مختلف در قالب
                  قراردادهای مشارکت (سرمایه‌گذاری در ساخت‌وساز) یا قراردادهای
                  پیمان مدیریت، توانسته‌ام دین خود را در مسیر توسعه، آبادانی و
                  کارآفرینی برای کشور عزیزم ادا نمایم.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Code,
                  title: "نرم‌افزارها",
                  items: resumeData.software,
                },
                { icon: Briefcase, title: "تخصص‌ها", items: resumeData.skills },
                {
                  icon: Languages,
                  title: "زبان‌ها",
                  items: resumeData.languages.map(
                    (l) => `${l.name} (${l.level})`,
                  ),
                },
                {
                  icon: GraduationCap,
                  title: "تحصیلات",
                  items: resumeData.education.map((e) => e.degree),
                },
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <section.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.slice(0, 5).map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Timeline Section (مسیر حرفه‌ای - با تغییرات جذاب) --- */}
        <section className="bg-white py-20 relative overflow-hidden">
          {/* پس‌زمینه تزئینی محو */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-16 text-center tracking-tighter">
                مسیر حرفه‌ای
              </h2>

              <div className="relative max-w-3xl mx-auto">
                {/* خط عمودی گرادینت */}
                <div className="absolute top-0 bottom-0 right-4 lg:right-8 w-1 bg-gradient-to-b from-primary via-emerald-200 to-transparent rounded-full" />

                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative pr-16 lg:pr-24 pb-12 group"
                  >
                    {/* دایره نشانگر روی خط */}
                    <div className="absolute right-1 lg:right-5 top-0 w-7 h-7 bg-white border-4 border-emerald-100 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300 shadow-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-300 rounded-full group-hover:bg-primary transition-colors" />
                    </div>

                    {/* کارت تجربه */}
                    <div
                      className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative transition-all duration-500 ease-out 
                                    group-hover:-translate-x-2 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] 
                                    group-hover:border-primary/20 group-hover:bg-gradient-to-br from-white to-emerald-50/50"
                    >
                      {/* آیکون شناور که با هاور ظاهر می‌شود */}
                      <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 text-primary">
                        <Calendar size={40} strokeWidth={1.5} />
                      </div>

                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-sm font-semibold text-slate-500 mb-4 border-b border-slate-200 pb-3 w-fit">
                        {exp.company}
                      </p>

                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 group-hover:text-slate-800">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
