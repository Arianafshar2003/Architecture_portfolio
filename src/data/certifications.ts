export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl?: string;
  imageUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 'leed-ap',
    title: 'LEED AP BD+C',
    issuer: 'U.S. Green Building Council',
    date: '۱۴۰۲',
    description: 'گواهی حرفه‌ای طراحی و ساخت ساختمان‌های سبز',
    pdfUrl: '/pdfs/certificates/leed-ap.pdf',
  },
  {
    id: 'revit-pro',
    title: 'Autodesk Revit Professional',
    issuer: 'Autodesk',
    date: '۱۴۰۱',
    description: 'گواهی حرفه‌ای نرم‌افزار Revit',
    pdfUrl: '/pdfs/certificates/revit-pro.pdf',
  },
  {
    id: 'rhino-grasshopper',
    title: 'Rhino & Grasshopper Specialist',
    issuer: 'McNeel',
    date: '۱۴۰۰',
    description: 'تخصص در طراحی پارامتریک',
    pdfUrl: '/pdfs/certificates/rhino.pdf',
  },
  {
    id: 'passive-house',
    title: 'Certified Passive House Designer',
    issuer: 'Passive House Institute',
    date: '۱۴۰۲',
    description: 'طراحی ساختمان‌های با مصرف انرژی نزدیک به صفر',
    pdfUrl: '/pdfs/certificates/passive-house.pdf',
  },
];

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    university: string;
  }[];
  skills: string[];
  software: string[];
  languages: { name: string; level: string }[];
}

export const resumeData: ResumeData = {
  name: 'افشین افشار',
  title: 'معمار و طراح داخلی',
  email: 'a.afshar.design@gmail.com',
  phone: '09123381464',
  summary: 'معمار با بیش از ۲۸ سال تجربه در طراحی پروژه‌های مسکونی و تجاری. متخصص در معماری پایدار و طراحی پارامتریک.',
  experience: [
    {
      title: 'مدیر پروژه و عضو هیئت مدیره مهندسان مشاور آبادبوم',
      company: 'مهندسان مشاور آبادبوم',
      period: '۱۳۷۵ - ۱۳۸۴',
      description: 'تهران و قشم',
    },
    {
      title: 'رئیس هیئت مدیره مهندسان مشاور آبادبوم',
      company: 'مهندسان مشاور آبادبوم',
      period: '۱۳۸۴ - ۱۳۹۰',
      description: 'تهران',
    },
    {
      title: 'طراح و مدیر اجرايی',
      company: 'احداث ساختمان مسکونی ظفر',
      period: '۱۳۸۸ - ۱۳۸۹',
      description: '۷ طبقه شامل ۱۵ واحد مسکونی به متراژ حدود ۳۵۰۰ متر مربع',
    },
    {
      title: 'طراح و مدیر اجرايی',
      company: 'احداث ساختمان فروشگاه زنجیره ای پوشاک سالیان - نمک آبرود',
      period: '۱۳۸۹ - ۱۳۹۰',
      description: '۴ طبقه و به متراژ حدود ۵۵۰۰ متر مربع',
    },
    {
      title: 'طراح و مدیر پروژه (مشارکت در ساخت)',
      company: 'طراحی و احداث واحد ویلایی دوبلکس واقع در سیسنگان - مازندران ( شهرک سروستان)',
      period: '۱۳۹۰ - ۱۳۹۱',
      description: '۵ واحد ویلایی در شهرک سروستان جمعا به مساحت ۱۲۰۰ متر مربع',
    },
    {
      title: 'طراح و مدیر پروژه (مشارکت در ساخت)',
      company: 'طراحی و احداث مجتمع تجاری-تفریحی نارسیس تهرانپارس - تهران',
      period: '۱۳۹۱ - ۱۳۹۸',
      description: 'در ۱۳ طبقه و به متراژ حدود ۲۲۰۰۰ متر مربع شامل سینما, فود کورت, شهربازی, لانج روف گاردن, هایپرمارکت و ... ',
    },
    {
      title: 'طراح و مدیر پروژه (پیمان مدیریت)',
      company: 'ساختمان مسکونی آرام  - سبلان - تهران',
      period: '۱۳۹۸ - ۱۳۹۹',
      description: 'در ۷ طبقه شامل تراس, سالن اجتماعات, باشگاه خصوصی, پنت هاوس و ...',
    },
    {
      title: 'طراح, ناظر و مدیر پروژه (طرح و نظارت)',
      company: 'بازسازی و طراحی داخلی و دکوراسیون ۲ واحد مسکونی و تجمیع آن ها به یک واحد مسکونی مدرن',
      period: '۱۳۹۹ - ۱۴۰۰',
      description: 'دبی - جمیرا',
    },
    {
      title: 'مدیر پروژه - طراح',
      company: 'احداث ساختمان مسکونی مظفریان واقع در هروی - تهران',
      period: '۱۴۰۰ - ۱۴۰۳',
      description: 'در ۷ طبقه ',
    },
    {
      title: 'طراح و مدیر پروژه (مشارکت در ساخت)',
      company: 'احداث ساختمان مسکونی جردن واقع در جردن - تهران',
      period: '۱۴۰۳ - تاکنون',
      description: 'در ۷ طبقه ',
    },
    {
      title: 'طراح و مدیر پروژه (پیمان مدیریت)',
      company: 'طراحی و احداث ساختمان اداری شرکت طرفه نگار واقع در میرداماد - تهران',
      period: '۱۴۰۴ - تاکنون',
      description: 'در ۱۰ طبقه ',
    },
  ],
  education: [
    {
      degree: 'کارشناسی معماری',
      university: 'دانشگاه آزاد اسلامی تهران',
    },
  ],
  skills: ['طراحی پایدار', 'معماری پارامتریک', 'مدیریت پروژه', 'نظارت عالیه', 'طراح داخلی', 'ناظر'],
  software: ['AutoCAD', '3Dmax'],
  languages: [
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'انگلیسی', level: 'متوسط' },
  ],
};
