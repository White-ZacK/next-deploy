import Link from 'next/link';
import { MdOutlineNotificationsNone , MdOutlineAttachMoney} from 'react-icons/md';
import { BiCalendarCheck } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { LuCalendarClock } from 'react-icons/lu';
import { BsChatSquareText } from 'react-icons/bs';
import { useSession } from "next-auth/react";
const PageMid = () => {
    const { data: session } = useSession();
  return (
    <div className='w-3/5 p-2 text-center h-screen overflow-y-auto  bg-gray-100 rounded-t-[3rem] ' data-aos='fade-up' data-aos-delay='400'>
        
        <div className="flex p-8 gap-4 w-full justify-between ">
            <div className='relative my-3 cursor-pointer '>
                <div className="hidden absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                3 {/* Notification count */}
                </div>
                <div className='text-3xl p-2 rounded-full bg-white profile_hover'>
                    <MdOutlineNotificationsNone/>
                </div>
            </div>
            <Link className="home-btn btn-accent p-8 w-1/3" href="#">أحصل على المساعدة</Link>
            <div className='hidden my-3 relative'>
                <input className='rounded-full h-full focus:ring focus:ring-gray-300 focus:outline-none py-2 px-6 text-right text-sm' type='text' placeholder='هل تبحث عن شيئ ؟'></input>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiSearchLine className="text-gray-500" />
                </div>
            </div>
            <div className='text-right ml-auto'>
                <h2 className='text-4xl mb-2' dir="rtl">مرحبا ،{session?.user.name}</h2>
                <p className='text-sm text-gray-600'>كيف تشعر صباح هذا اليوم ؟</p>
            </div>

        </div>
        <div className='w-full flex flex-row text-2xl' dir="rtl">
            <h4 className='mx-8'>احصائيات</h4>
            <hr className='border-1 w-full place-self-center'/>
        </div>
        <div className='w-full text-center flex flex-row place-content-around pt-5' dir="rtl">
        <div className="w-full px-4 md:w-1/2 lg:w-1/5 aspect-square text-accent" dir='rtl'  >
                          <div className="stat">
                              <BiCalendarCheck className="m-2 flex h-[50px] w-[50px] items-center justify-center bg-primary mx-auto " />
                              <p className="text-body-color text-center">عدد الجلسات</p>
                              <h4 className="mb-3 text-3xl font-semibold text-dark text-center">
                                5                            </h4>
                            </div>
          </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/5 aspect-square text-accent" dir='rtl'  >
                          <div className="stat">
                              <MdOutlineAttachMoney className="m-2 flex h-[50px] w-[50px] items-center justify-center bg-primary mx-auto " />
                              <p className="text-body-color text-center">الرصيد</p>
                              <h4 className="mb-3 text-3xl font-semibold text-dark text-center">
                               1200.00                            </h4>
                            </div>
          </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/5 aspect-square text-accent" dir='rtl'  >
                          <div className="stat">
                              <LuCalendarClock className="m-2 flex h-[50px] w-[50px] items-center justify-center bg-primary mx-auto " />
                              <p className="text-body-color text-center text-sm">الجلسات القادمة</p>
                              <h4 className="mb-3 text-3xl font-semibold text-dark text-center">3 </h4>
                            </div>
          </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/5 aspect-square text-accent" dir='rtl'  >
                          <div className="stat">
                              <BsChatSquareText className="m-2 flex h-[50px] w-[50px] items-center justify-center bg-primary mx-auto " />
                              <p className="text-body-color text-center ">المحادثات</p>
                              <h4 className="mb-3 text-3xl font-semibold text-dark text-center">2 </h4>
                            </div>
          </div>

        </div>
        <div className='w-full flex flex-row text-2xl' dir="rtl">
            <h4 className='mx-8'>مقالات الأطباء</h4>
            <hr className='border-1 w-full place-self-center'/>
        </div>
        <div className='blog p-8'>
            <div className='article bg-white'>
            <div className="flex flex-row border border-gray-300  shadow-sm p-2 rounded-2xl justify-between mb-2" dir='rtl'>     
                <img src="assets/images/pfp/1.jpg" className='w-14 h-16 rounded place-self-center' />
                <div>
                    <h3>دور الصحة البدنية في تحسين الحالة النفسية</h3> 

                    <p className='text-xs text-gray-400'>د. عيجولي سهيل</p>
                </div>
                <div className='place-self-center text-center bg-grey p-2 rounded-2xl'>
                <h3>6/12/2023</h3>
                <h3>11:22</h3>
                 </div>
      </div>
      <div>
      تعد الأنشطة الرياضية من أهم الطرق التي يتبعها العديد من الأشخاص للحفاظ على صحتهم الجسدية والنفسية، تعرف على أهم فوائد الرياضة للصحة النفسية في ما يأتي:

فوائد الرياضة للصحة النفسية
إليك أهم فوائد ممارسة الرياضة على الصحة النفسية في ما يأتي:

1. تساهم في تحسين المزاج
في حال كنت تريد الشعور بالسعادة والاسترخاء عليك بممارسة النشاط البدني المختلف من خلال الذهاب إلى صالة الألعاب الرياضية أو حتى المشي السريع‘ إذ يعمل النشاط البدني على تحفيز المواد الكيميائية المتواجدة في الدماغ والتي تجعلك تشعر بالسعادة والاسترخاء.

كما أن ممارسة الرياضة مع مجموعة من الأشخاص على وجه الخصوص توفر لك فرصة للاسترخاء والاندماج من أجل تحسين لياقتك، كما أن لها فوائد اجتماعية من خلال السماح لك بالتواصل مع الزملاء والأصدقاء في بيئة ترفيهية.

      </div>
            </div>
        </div>
    </div>
  )
}

export default PageMid