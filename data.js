// import images
import LogoImg from '@public/assets/images/logo.png';
import HeroImg from '@public/assets/images/VideoCall.svg';
import OverviewProductImg from '@public/assets/images/product.svg';
import Univ from '@public/assets/images/brands/1.png';
import HelpCentre from '@public/assets/images/brands/2.jpg';
import Incubateur from '@public/assets/images/brands/3.jpg';
import Feature1Img from '@public/assets/images/feature1-img.svg';
import Feature2Img from '@public/assets/images/feature2-img.svg';
import Feature3Img from '@public/assets/images/feature3-img.svg';
import CardIconImg1 from '@public/assets/images/cards/1.svg';
import CardIconImg2 from '@public/assets/images/cards/2.svg';
import CardIconImg3 from '@public/assets/images/cards/3.svg';
import CardIconImg4 from '@public/assets/images/cards/4.svg';
import PricingIcon1 from '@public/assets/images/icon1.svg';
import PricingIcon2 from '@public/assets/images/icon2.svg';
import PricingIcon3 from '@public/assets/images/icon3.svg';
import AvatarImg1 from '@public/assets/images/testimonial/avatar1.png';
import AvatarImg2 from '@public/assets/images/testimonial/avatar2.png';
import AvatarImg3 from '@public/assets/images/testimonial/avatar3.png';
import AvatarImg4 from '@public/assets/images/testimonial/avatar4.png';
import AvatarImg5 from '@public/assets/images/testimonial/avatar5.png';
import CtaImg1 from '@public/assets/images/image1.svg';
import CtaImg2 from '@public/assets/images/image2.svg';
import FacebookIcon from '@public/assets/images/facebook.svg';
import TwitterIcon from '@public/assets/images/twitter.svg';
import LinkedinIcon from '@public/assets/images/linkedin.svg';
import Doctor1 from '@public/assets/images/doctors/1.svg';
import Doctor2 from '@public/assets/images/doctors/2.svg';
import Doctor3 from '@public/assets/images/doctors/3.svg';
import Doctor4 from '@public/assets/images/doctors/4.svg';
import { BiHomeSmile , BiCog , BiMessageDetail ,BiCalendar} from 'react-icons/bi';

export const header = {
  logo: LogoImg,
  SignIn: 'تسجيل الدخول',
  SignUp: 'أحصل على مساعدة',
  LogOut: 'تسجيل الخروج'
};

export const nav = [
  
  { name: 'الأخصائيين', href: '/specialists' },
  { name: 'من نحن', href: '/us' },
  { name: 'الرئيسية', href: '/' },
];

export const hero = {
  title: 'حقق أهدافك بالإشتراك في باقاتنا التي تتضمن مميزات مصممة خصيصا لتلبية إحتياجاتك',
  subtitle: ' التي تتضمن مميزات مصممة خصيصا لتلبية إحتياجاتك',
  btnText: 'إكتشف معالجينا',
  compText: 'تواصل مع المعالج المناسب',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: Univ,
      delay: 300,
    },
    {
      image: HelpCentre,
      delay: 400,
    },
    {
      image: Incubateur,
      delay: 500,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Real-time support with cloud',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Save cost for you and family',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Use anytime',
    title: 'Use anytime when you need',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    image: Feature3Img,
  },
};

export const services = {
  header: 'خدماتنا :',
  title: 'نوفر لعملائنا الخدمات التالية :',
  subtitle:
    'يُعدّ ضمان خصوصية بيانات المستخدمين الشخصية أمراً في غاية الأهمية بالنسبة لاطمئن حيث تبقى المعلومات الخاصة بك بينك و بين المختص فقط بالاضافة إلى ذلك نوفر :',
  cards: [
    {
      icon: CardIconImg1,
      title: 'استعمل اي جهاز لديك ',
      subtitle: 'يمكنك الاتصال من حاسوبك او هاتفك او من اي جهاز بشرط توفر الانترنت',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'اختر الباقة المالية التي تناسبك ',
      subtitle: 'يمكنك اختيار باقات فردية او جماعية لك و لعائلتك او مؤسستك ابتداءا من 500دج',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'احجز في اي وقت يساعدك',
      subtitle: 'يعمل مختصونا في جميع الاوقات و طوال ايام الاسبوع 24/7',
      delay: 600,
    },
    {
      icon: CardIconImg4,
      title: 'نوفر لك المختص الذي يناسبك',
      subtitle: 'يمكنك اختيار المختص الذي يساعدك او الاجابة على الاسئلة لمساعدتنا على ربطك بالمختص المناسب',
      delay: 800,
    },
  ],
};

export const doctors = {
  title: 'تعرف على مختصينا',
  doctor: [
    {
      icon: Doctor1,
      name: 'د سهيل عيجولي',
      desc: 'أخصائي اجتماعي ، مصنفة من الهيئة الجزائرية للتخصصات الصحية ، انا هنا ادعمك لتكون على طبيعة ، وانا اساعدك للتغلب على العقبات التي تمنعك من التأقلم والأداء الفعال',
      
    },
    {
      icon: Doctor2,
      name: 'د سهيل عيجولي',
      desc: 'أخصائي اجتماعي ، مصنفة من الهيئة الجزائرية للتخصصات الصحية ، انا هنا ادعمك لتكون على طبيعة ، وانا اساعدك للتغلب على العقبات التي تمنعك من التأقلم والأداء الفعال',
    },
    {
      icon: Doctor3,
      name: 'د سهيل عيجولي',
      desc: 'أخصائي اجتماعي ، مصنفة من الهيئة الجزائرية للتخصصات الصحية ، انا هنا ادعمك لتكون على طبيعة ، وانا اساعدك للتغلب على العقبات التي تمنعك من التأقلم والأداء الفعال',
    },
    {
      icon: Doctor4,
      name: 'د سهيل عيجولي',
      desc: 'أخصائي اجتماعي ، مصنفة من الهيئة الجزائرية للتخصصات الصحية ، انا هنا ادعمك لتكون على طبيعة ، وانا اساعدك للتغلب على العقبات التي تمنعك من التأقلم والأداء الفعال',
    },

  ],
};
export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ Itmain 2023',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};

export const rightpage ={
  pages :[
    {icon: BiHomeSmile , href:'/Home', title:'الرئيسية'},
    {icon: BiCalendar , href:'/session',title:'جلساتي'},
    {icon: BiMessageDetail , href:'/messages',title:'الرسائل'},
    {icon: BiCog , href:'/settings',title:'الاعدادات'}
  ]
}
