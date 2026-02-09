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
    <div className="min-h-screen bg-background text-right" dir="rtl">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-6 mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-48 h-48 lg:w-80 lg:h-80 rounded-full lg:rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100"
            >
              <img
                src={profileImage}
                alt={resumeData.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Profile Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-1 text-center lg:text-right"
            >
              <h1 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                {resumeData.name}
              </h1>
              <p className="text-lg lg:text-xl text-primary font-bold mb-6">
                {resumeData.title}
              </p>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {resumeData.summary}
              </p>

              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-slate-100 rounded-full text-primary">
                    <Mail size={16} />
                  </div>
                  {resumeData.email}
                </a>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-slate-100 rounded-full text-primary">
                    <Phone size={16} />
                  </div>
                  {resumeData.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Story Section --- */}
        <section className="bg-slate-50 py-20 border-y border-slate-200">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                  درباره من
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-slate-600 leading-8 text-justify">
                <p>
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
                <p>
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

        {/* --- Timeline Section (مسیر حرفه‌ای - حرفه‌ای و متناسب با تم جدید) --- */}
        <section className="bg-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center mb-16">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2">
                  Experience
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  مسیر حرفه‌ای
                </h2>
                <div className="w-16 h-1.5 bg-primary mt-6 rounded-full" />
              </div>

              <div className="relative max-w-4xl mx-auto pl-0 lg:pl-0">
                {/* خط عمودی اصلی - ساده و شیک */}
                <div className="absolute top-0 bottom-0 right-4 lg:right-[22px] w-[2px] bg-slate-200" />

                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative pr-12 lg:pr-20 pb-12 last:pb-0 group"
                  >
                    {/* نقطه اتصال (Node) */}
                    <div className="absolute right-[9px] lg:right-[15px] top-0 w-4 h-4 bg-white border-[3px] border-slate-300 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300 shadow-sm" />

                    {/* کارت تجربه - مینیمال و حرفه‌ای */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      {/* بخش سال */}
                      <div className="shrink-0 md:w-32 pt-1">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-md shadow-sm">
                          {exp.period}
                        </span>
                      </div>

                      {/* بخش جزئیات */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-500">
                          <Briefcase size={14} />
                          {exp.company}
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Skills & Values (Updated Style) --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
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
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-slate-600">
                      <section.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.slice(0, 5).map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex items-center gap-2.5"
                      >
                        <div className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-primary transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
