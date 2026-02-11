import first_narcis from '@/assets/projects/narcis/1.jpg';
import second_narcis from '@/assets/projects/narcis/2.jpg';
import third_narcis from '@/assets/projects/narcis/3.jpg';
import fourth_narcis from '@/assets/projects/narcis/4.jpg';
import fifth_narcis from '@/assets/projects/narcis/5.jpg';
import seventh_narcis from '@/assets/projects/narcis/7.jpg';

import first_mozafarian from '@/assets/projects/mozafarian/1.jpg';
import second_mozafarian from '@/assets/projects/mozafarian/2.jpg';
import third_mozafarian from '@/assets/projects/mozafarian/3.jpg';
import fourth_mozafarian from '@/assets/projects/mozafarian/4.jpg';
import fifth_mozafarian from '@/assets/projects/mozafarian/5.jpg';
import sixth_mozafarian from '@/assets/projects/mozafarian/6.jpg';
import seventh_mozafarian from '@/assets/projects/mozafarian/7.jpg';
import eights_mozafarian from '@/assets/projects/mozafarian/8.jpg';

import first_dubai from '@/assets/projects/dubai/1.PNG';
import second_dubai from '@/assets/projects/dubai/2.PNG';
import third_dubai from '@/assets/projects/dubai/3.PNG';
import fourth_dubai from '@/assets/projects/dubai/4.PNG';
import fifth_dubai from '@/assets/projects/dubai/5.PNG';
import sixth_dubai from '@/assets/projects/dubai/6.PNG';
import eights_dubai from '@/assets/projects/dubai/8.PNG';
import ninth_dubai from '@/assets/projects/dubai/9.JPG';
import dubai_10 from '@/assets/projects/dubai/10.JPG';
import dubai_11 from '@/assets/projects/dubai/11.JPG';
import dubai_12 from '@/assets/projects/dubai/12.JPG';
import dubai_13 from '@/assets/projects/dubai/13.JPG';
import dubai_14 from '@/assets/projects/dubai/14.JPG';
import dubai_15 from '@/assets/projects/dubai/15.JPG';
import dubai_16 from '@/assets/projects/dubai/16.JPG';
import dubai_17 from '@/assets/projects/dubai/17.JPG';

import first_aram from '@/assets/projects/aram/1.JPG';
import second_aram from '@/assets/projects/aram/2.JPG';
import third_aram from '@/assets/projects/aram/3.JPG';
import fourth_aram from '@/assets/projects/aram/4.JPG';
import fifth_aram from '@/assets/projects/aram/5.JPG';
import sixth_aram from '@/assets/projects/aram/6.JPG';
import eights_aram from '@/assets/projects/aram/8.JPG';
import ninth_aram from '@/assets/projects/aram/9.JPG';
import aram_10 from '@/assets/projects/aram/10.JPG';
import aram_11 from '@/assets/projects/aram/11.JPG';
import aram_12 from '@/assets/projects/aram/12.JPG';
import aram_13 from '@/assets/projects/aram/13.JPG';
import aram_14 from '@/assets/projects/aram/14.JPG';
import aram_15 from '@/assets/projects/aram/15.JPG';
import aram_16 from '@/assets/projects/aram/16.JPG';
import aram_17 from '@/assets/projects/aram/17.JPG';

import first_jordan from '@/assets/projects/jordan/1.JPG';
import second_jordan from '@/assets/projects/jordan/2.JPG';
import third_jordan from '@/assets/projects/jordan/3.JPG';
import fourth_jordan from '@/assets/projects/jordan/4.JPG';
import fifth_jordan from '@/assets/projects/jordan/5.JPG';
import sixth_jordan from '@/assets/projects/jordan/6.png';
import eights_jordan from '@/assets/projects/jordan/8.png';
import ninth_jordan from '@/assets/projects/jordan/9.png';
import jordan_10 from '@/assets/projects/jordan/10.png';

import first_salian from '@/assets/projects/salian/1.jpg';
import second_salian from '@/assets/projects/salian/2.jpg';
import third_salian from '@/assets/projects/salian/3.jpg';
import fourth_salian from '@/assets/projects/salian/4.jpg';
import fifth_salian from '@/assets/projects/salian/5.jpg';
import sixth_salian from '@/assets/projects/salian/6.jpg';
import seventh_salian from '@/assets/projects/salian/7.jpg';

import first_mirdamad from '@/assets/projects/mirdamad/1.JPG';
import second_mirdamad from '@/assets/projects/mirdamad/2.JPG';
import third_mirdamad from '@/assets/projects/mirdamad/3.JPG';
import fourth_mirdamad from '@/assets/projects/mirdamad/4.JPG';
import fifth_mirdamad from '@/assets/projects/mirdamad/5.JPG';

import first_sorkhab from '@/assets/projects/sorkhab/1.JPG';
import second_sorkhab from '@/assets/projects/sorkhab/2.JPG';
import third_sorkhab from '@/assets/projects/sorkhab/3.PNG';
import fourth_sorkhab from '@/assets/projects/sorkhab/4.JPG';
import fifth_sorkhab from '@/assets/projects/sorkhab/5.JPG';
import sixth_sorkhab from '@/assets/projects/sorkhab/6.JPG';
import seventh_sorkhab from '@/assets/projects/sorkhab/7.PNG';

import first_villa from '@/assets/projects/villa/1.JPG';
import second_villa from '@/assets/projects/villa/2.JPG';
import third_villa from '@/assets/projects/villa/3.JPG';
import fourth_villa from '@/assets/projects/villa/4.JPG';
import fifth_villa from '@/assets/projects/villa/5.JPG';
import sixth_villa from '@/assets/projects/villa/6.JPG';
import seventh_villa from '@/assets/projects/villa/7.JPG';

import mojtamaNovin from '@/assets/projects/mojtama-novin.jpg';
import cafeHonari from '@/assets/projects/cafe-honari.jpg';

export interface Project {
  slug: string;
  title: string;
  year: number;
  location: string;
  category: 'residential' | 'commercial' | 'interior' | 'Edari' | 'villa';
  categoryLabel: string;
  coverImage: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  area?: string;
  client?: string;
  status: 'completed' | 'in-progress' | 'concept';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'mozafarian',
    title: 'مجتمع مسکونی مظفریان - هروی',
    year: 1403,
    location: 'تهران هروی',
    category: 'residential',
    categoryLabel: 'مسکونی',
    coverImage: first_mozafarian,
    images: [first_mozafarian, second_mozafarian, third_mozafarian, fourth_mozafarian, fifth_mozafarian, sixth_mozafarian, seventh_mozafarian, eights_mozafarian],
    shortDescription: 'طراحی معماری ساختمان, داخلی و landscape و اجرا و مدیریت بر اجرا ',
    fullDescription: 'مجتمع مسکونی مظفریان در منطقه هروی، کوچه مظفریان با سبک مدرن احداث گردیده است. این ساختمان به مساحت کل ۲۲۰۰ متر مربع در ۷ طبقه، شامل ۵ طبقه ۲ واحدی مسکونی و ۲ طبقه پارکینگ ساخته شده است که دارای لابی، روف‌گاردن، سرایداری و مشاعات مناسب می‌باشد. ساخت این پروژه به‌صورت قرارداد پیمان مدیریت و به مالکیت آقای ابراهیمی انجام گرفته است. مدت زمان طراحی و اجرای این پروژه ۲ سال بوده است.',
    area: '۲۲۰۰ متر مربع',
    client: 'خصوصی',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'narcis',
    title: 'مجتمع تجاری تفریحی نارسیس - تهرانپارس',
    year: 1392,
    location: 'تهران، تهرانپارس',
    category: 'commercial',
    categoryLabel: 'تجاری',
    coverImage: first_narcis,
    images: [first_narcis, second_narcis, third_narcis, fourth_narcis, fifth_narcis, seventh_narcis],
    shortDescription: 'طراحی و ساخت یکی از بزرگ‌ترین مراکز خرید چندمنظوره تجاری-تفریحی شرق تهران با تمرکز بر جبران کمبود سرانه تجاری منطقه.',
    fullDescription: 'شرق تهران (منطقه ۴ شهرداری) به‌لحاظ وسعت و جمعیت بالای خود به‌عنوان دومین منطقه بزرگ شهرداری تهران شناخته شده است؛ در حالی که سرانه کاربری تجاری در این منطقه بسیار پایین است. در این خصوص، احداث مجتمع تجاری - تفریحی نارسیس تهرانپارس در دستور کار قرار گرفت و موفق شدیم این کمبود کاربری را تا حدودی در این منطقه جبران کنیم. افتخار طراحی و ساخت مجتمع تجاری مذکور در قالب قرارداد مشارکت در ساخت به اینجانب محول گردید و طی سال‌های ۱۳۹۱ تا ۱۳۹۸ موفق به ساخت و راه‌اندازی این مرکز خرید گردیدم. این مرکز دارای ۳۲۰ واحد پارکینگ، هایپرمارکت شهروند، ۲۱۰ واحد تجاری با متراژهای مختلف، چندین کافی‌شاپ در طبقات مختلف، سالن بازی کودکان، پردیس سینمایی (۴ سالن)، فودکورت و یک لانژ سوپرلوکس واقع در بام (روف لانژ) می‌باشد. با توجه به دارا بودن امکانات فوق‌الذکر، این مرکز تجاری توانست به‌عنوان یکی از پربازدیدترین مراکز تجاری در شرق تهران شناخته شود.',
    area: '۲۲۰۰۰ متر مربع',
    client: 'شرکت توسعه نوین',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'dubai',
    title: 'طراحی داخلی واحد مسکونی Duabi - Marina',
    year: 2022,
    location: 'Dubai - Jw Marriot Marina',
    category: 'interior',
    categoryLabel: 'طراحی داخلی',
    coverImage: first_dubai,
    images: [first_dubai, second_dubai, third_dubai, fourth_dubai, fifth_dubai, sixth_dubai, eights_dubai, ninth_dubai,dubai_10,dubai_11,dubai_12,dubai_13,dubai_14,dubai_15,dubai_16, dubai_17],
    shortDescription: 'طراحی داخلی و دکوراسیون واحد ۳۵۰ متری و نظارت بر ساخت',
    fullDescription: 'پروژه مذکور به درخواست مالک محترم، آقای مهندس فخار، جهت تجمیع ۲ واحد آپارتمان واقع در برج JW Marriott واقع در مارینا - دبی استارت خورد. سبک مورد نظر ایشان طراحی داخلی مدرن بود که پس از طی مراحل طراحی، بازسازی آن توسط یک شرکت مستقر در دبی و با نظارت دوره‌ای اینجانب به اتمام رسید. مساحت این آپارتمان پس از تجمیع به ۳۵۰ متر مربع رسید و مدت زمان طراحی و اجرای آن ۱۰ ماه به طول انجامید. چالش‌ها و محدودیت‌های موجود در این کار شامل حفظ نمای خارجی، چشم‌انداز بی‌نظیر ۲۶۰ درجه آن، نگهداری و عدم تقویت سازه ساختمان، حداقل تخریب تیغه‌های داخلی موجود و حفظ سیستم برق و تأسیسات ساختمان بود که توانستیم از این چالش‌ها با موفقیت خارج شویم و پروژه را بدون مشکل اجرا کنیم.',
    area: '۳۵۰ متر مربع',
    client: 'کافه هنر',
    status: 'completed',
    featured: true,
  },
  {
    slug: 'aram',
    title:  'مجتمع مسکونی آرام - سبلان',
    year: 1400,
    location: 'تهران, سبلان',
    category: 'residential',
    categoryLabel: 'مسکونی',
    coverImage: first_aram,
    images: [first_aram, second_aram, third_aram, fourth_aram, fifth_aram, sixth_aram, eights_aram, ninth_aram,aram_10,aram_11,aram_12,aram_13,aram_14,aram_15,aram_16, aram_17],
    shortDescription: 'طراحی معماری ساختمان, داخلی و landscape و اجرا و مدیریت بر اجرا ',
    fullDescription: 'طراحی و ساخت ساختمان مسکونی آرام با انعقاد قرارداد پیمان مدیریت با مالکیت آقای مهندس فخار احداث گردیده است. این ساختمان جمعاً با ۱۵۰۰ متر مربع زیربنا در ۷ طبقه بنا شده است. طبقه زیرزمین شامل سالن چندمنظوره (سالن اجتماعات و ورزش)، انباری و موتورخانه می‌باشد. طبقه همکف شامل محوطه‌سازی زیبایی است که با پارکینگ‌ها و لابی ورودی به‌صورت یک فضای یکپارچه طراحی گردیده و ورودی مجلل و خاصی به ساختمان بخشیده است. طبقات اول تا سوم به‌صورت تک‌واحدی و طبقات چهارم و پنجم به‌صورت دوبلکس ساخته شده‌اند. نمای ساختمان با سرامیک‌های ایتالیایی سفید به سبک مدرن طراحی و اجرا گردیده و دکوراسیون و طراحی داخلی واحدها نیز با همین سبک طراحی شده‌اند. بنا به درخواست کارفرما، سالن چندمنظوره ساختمان دارای تلفیقی از سبک سنتی ایرانی و مدرن می‌باشد و ساختمان دارای یک روف‌گاردن با چشم‌انداز ۳۶۰ درجه است.',
    area: '۱۵۰۰ متر مربع',
    status: 'completed',
  },
  {
    slug: 'jordan',
    title: 'مجتمع مسکونی جردن',
    year: 1404,
    location: 'تهران - جردن',
    category: 'residential',
    categoryLabel: 'مسکونی',
    coverImage: first_jordan,
    area: '۱۴۰۰ متر مربع',
    images: [first_jordan, second_jordan, third_jordan, fourth_jordan, fifth_jordan, sixth_jordan, eights_jordan, ninth_jordan,jordan_10],
    shortDescription:'طراحی معماری ساختمان, داخلی , landscape , اجرا و مشارکت در ساخت ' ,
    fullDescription: 'طرح و ساخت مسکونی مذکور واقع در خیابان جردن، یکی دیگر از پروژه‌های مشارکتی اینجانب می‌باشد. ساختمان مذکور دارای ۵ واحد مسکونی تک‌واحدی و دو طبقه زیرین شامل لابی و پارکینگ و جمعاً در ۷ طبقه و با متراژ ۱۴۰۰ متر مربع می‌باشد. نمای ساختمان با ترکیب آجر و سنگ به سبک سنتی - مدرن طراحی شده است و سبک واحدهای آن مینیمال می‌باشد. این پروژه در سال ۱۴۰۳ استارت خورد و تاکنون ادامه دارد.',
    status: 'completed',
  },
  {
    slug: 'salian',
    title: 'فروشگاه سالیان - شعبه نمک آبرود',
    year: 1389,
    location: 'مازندران, نمک آبرود',
    category: 'commercial',
    categoryLabel: 'تجاری',
    coverImage: first_salian,
    images: [first_salian, second_salian, third_salian, fourth_salian, fifth_salian, sixth_salian, seventh_salian],
    shortDescription: 'طراحی و مدیریت در ساخت و ساز',
    fullDescription: 'شرکت سالیان به مالکیت آقایان محمدی، یکی از بزرگ‌ترین برندهای داخلی پوشاک مردانه، زنانه و بچه‌گانه در کشور است و شامل فروشگاه‌های زنجیره‌ای متعدد در تهران و شهرهای مختلف ایران می‌باشد. با خرید قطعه زمینی در منطقه نمک‌آبرود استان مازندران، متقاضی طراحی و احداث فروشگاهی در چندین طبقه (فروشگاه و پارکینگ) گردیدند. مساحت زمین مذکور ۱۵۰۰ متر مربع و مساحت ساختمان آن مجموعاً ۵۵۰۰ متر مربع می‌باشد. این پروژه به‌صورت پیمان مدیریت و طی ۲ سال کاری طراحی و اجرا گردید. سبک ساختمان تجاری سالیان مینیمال بوده و الگوبرداری فروشگاه‌های دیگر این شرکت نیز از این ساختمان انجام گردیده است.',
    area: '۵۵۰۰ متر مربع',
    client: 'شرکت توسعه نوین',
    status: 'completed',
    featured: true,
  },
{
    slug: 'mirdamad',
    title: 'ساختمان اداری طرفه نگار - میرداماد',
    year: 1403,
    location: 'تهران, پل میرداماد ',
    category: 'Edari',
    categoryLabel: 'اداری',
    coverImage: first_mirdamad,
    images: [first_mirdamad, second_mirdamad, third_mirdamad, fourth_mirdamad, fifth_mirdamad],
    shortDescription: 'طراحی معماری ساختمان و مدیریت در ساخت',
    fullDescription: 'شرکت طرفه‌نگار که یکی از بزرگ‌ترین شرکت‌های کارآفرین در زمینه امور مهندسی نرم‌افزار در کشور می‌باشد، در سال ۱۴۰۳ متقاضی طراحی یک ساختمان اداری در ملک موجود شرکت در خیابان میرداماد گردید. این ساختمان در ۱۰ طبقه، شامل ۶ طبقه اداری و ۴ طبقه مشاعی و به مساحت کل ۳۲۰۰ متر مربع طراحی گردیده است. در حال حاضر امور مربوط به اخذ مجوز ساخت (پروانه ساختمانی) در حال انجام می‌باشد و در سال ۱۴۰۵ ساخت آن در دستور کار قرار خواهد گرفت. قرارداد ساخت به‌صورت پیمان مدیریت ارجاع گردیده است و طی مدت ۳ سال اجرا خواهد شد.',
    area: '۳۲۰۰ متر مربع',
    client: 'شرکت توسعه نوین',
    status: 'in-progress',
    featured: true,

  },
  {
    slug: 'sorkhab',
    title: 'ویلا کردان - سرخاب',
    year: 1404,
    location: 'کرج, سرخاب  ',
    category: 'villa',
    categoryLabel: 'ویلایی',
    coverImage: first_sorkhab,
    images: [first_sorkhab, second_sorkhab, third_sorkhab, fourth_sorkhab, fifth_sorkhab, sixth_sorkhab, seventh_sorkhab],
    shortDescription: 'طراحی معماری ساختمان و مدیریت در ساخت',
    fullDescription: 'کردانِ کرج طی سالیان اخیر بسیار مورد توجه و علاقه شهروندان ساکن تهران و کرج قرار گرفت. یکی از مناطق مرغوب آن، منطقه سرخاب می‌باشد. مساحت قطعه مورد نظر ۶۰۰ متر مربع بوده و ویلای احداثی در آن به‌صورت دوبلکس و به سبک مدرن طراحی گردیده است که متراژ آن ۴۵۰ متر مربع می‌باشد. این پروژه نیز به‌صورت پیمان مدیریت در حال انجام است.',
    area: '۴۵۰ متر مربع',
    client: 'شرکت توسعه نوین',
    status: 'in-progress',
    featured: true,

  },
  {
    slug: 'villa',
    title: 'طراحی ویلا های شهرک سروستان - سیسنگان',
    year: 1390,
    location: 'مازندران, سیسنگان',
    category: 'villa',
    categoryLabel: 'ویلایی',
    coverImage: first_villa,
    images: [first_villa, second_villa, third_villa, fourth_villa, fifth_villa, sixth_villa, seventh_villa],
    shortDescription: 'طراحی, ساخت و نظارت تیپ های مختلف ویلایی',
    fullDescription: 'شهرک سروستان به‌عنوان یکی از زیباترین و مرغوب‌ترین شهرک‌های جنگلی منطقه سیسنگان در استان مازندران شناخته شده است. این شهرک به مساحت تقریبی ۴ هکتار دارای ۳۸ واحد ویلایی می‌باشد. استارت این پروژه توسط مالکین محترم آن به اینجانب محول گردید و توانستیم با تلاش‌ها و مطالعات مناسب طی ۳ سال، این شهرک را به‌صورت ۱۰۰٪ آماده و راه‌اندازی نماییم. در این خصوص، طراحی و ساخت یک سری از ویلاهای مذکور به‌عنوان الگوی معماری شهرک در قالب قرارداد طراحی و مشارکت توسط ما احداث گردید و به‌واسطه آن با ارزش‌گذاری قطعات ساخته شده، سایر قطعات نیز واگذار و احداث گردید.',
    area: 'از ۱۸۰ تا ۰ متر مربع',
    client: 'شرکت توسعه نوین',
    status: 'in-progress',
    featured: true,

  },
  
  
];

export const categories = [
  { value: 'all', label: 'همه' },
  { value: 'residential', label: 'مسکونی' },
  { value: 'commercial', label: 'تجاری' },
  { value: 'interior', label: 'طراحی داخلی' },
  { value: 'Edari', label: 'اداری' },

];

export const featuredProjects = projects.filter(p => p.featured);
