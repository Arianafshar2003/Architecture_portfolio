import { Mail, ArrowUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// کامپوننت‌های SVG برای لوگوهای واتساپ و تلگرام
const SocialIcons = {
  Whatsapp: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Telegram: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current"
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
};

export function Footer() {
  const scrollToTop = () => {
    const container = document.querySelector(".scroll-snap-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative z-50">
      <div className="container mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase block">
                Architecture Design
              </span>
            </div>
            {/* فونت بزرگتر شد (text-sm) */}
            <p className="text-slate-500 text-sm leading-7 font-medium max-w-sm text-justify">
              تخصص در طراحی کانسپت و مدیریت پروژه‌های لوکس با تکیه بر ۲۸ سال
              تجربه مستمر.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wider">
              دسترسی سریع
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/works", label: "پروژه‌ها" },
                { to: "/about", label: "درباره من" },
                { to: "/concept", label: "کانسپت‌های طراحی" },
                { to: "/resume", label: "ارتباط با من" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  // فونت بزرگتر شد (text-sm)
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wider">
              ارتباط
            </h4>
            <div className="flex flex-col gap-5">
              {/* بخش ایمیل و تلفن */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:a.afshar.design@gmail.com"
                  className="group flex items-center gap-3"
                >
                  <div className="p-2 bg-white border border-slate-200 rounded-md group-hover:border-slate-400 transition-colors text-slate-400 group-hover:text-slate-700">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  {/* فونت بزرگتر شد (text-sm) */}
                  <span className="text-sm font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                    a.afshar.design@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+989123381464"
                  className="group flex items-center gap-3"
                >
                  <div className="p-2 bg-white border border-slate-200 rounded-md group-hover:border-slate-400 transition-colors text-slate-400 group-hover:text-slate-700">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  {/* فونت بزرگتر شد (text-sm) */}
                  <span className="text-sm font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                    0912 338 1464
                  </span>
                </a>
              </div>

              {/* بخش شبکه‌های اجتماعی */}
              <div>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/989123381464"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                    title="واتساپ"
                  >
                    <SocialIcons.Whatsapp />
                  </a>

                  <a
                    href="https://t.me/afshinafshar"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-400 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-all duration-300"
                    title="تلگرام"
                  >
                    <SocialIcons.Telegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-mono tracking-[0.05em] uppercase">
            © 2026 AFSHIN AFSHAR.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-700 transition-colors"
          >
            بازگشت به بالا <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
