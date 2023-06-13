"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

const SignUp
 = () => {
  const router = useRouter();
  useEffect(() => {
    const initializeAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        offset: 100,
      });
    };

    if (typeof window !== 'undefined') {
      initializeAOS();
    }
  }, []);
  const { data: session } = useSession();
  return (

    <section className="bg-gray-100 min-h-screen flex items-center justify-center">

    <div className=" lg:bg-[url('/assets/images/password.svg')] bg-auto bg-no-repeat bg-white bg-cover flex rounded-2xl lg:min-w-[850px] lg:min-h-[550px] shadow-lg  p-5 items-center" data-aos='fade-right' data-aos-delay='200'>
    <div className="md:block hidden lg:w-1/2"></div>
      <div className="lg:w-1/2 px-8 md:px-16 text-right" data-aos='fade-down'data-aos-delay='400'>
        <h2 className="font-bold text-2xl text-[#3a4d56]">التسجيل في إطمئن</h2>
        <p className="text-xs mt-4 text-[#3a4d56]">ليس لديك حساب ؟ قم بالتسجيل الآن</p>
  
        <form action="" className="flex flex-col gap-4">
          <input className="p-3 pr-6 mt-8 rounded-xl border text-right" type="text" name="username" placeholder="إسم المستخدم" />
          <input className="p-3 pr-6  rounded-xl border text-right" type="email" name="email" placeholder="البريد الإلكتروني" />
          <input className="p-3 pr-6 rounded-xl border w-full  text-right" type="password" name="password" placeholder="كلمة المرور" />
          <input className="p-3 pr-6 rounded-xl border w-full  text-right" type="password" name="cpassword" placeholder="تأكيد كلمة المرور" />
          <button type="button" className="bg-[#4cab94] rounded-xl text-white py-2 hover:scale-105 duration-300">إنشاء حساب</button>
        </form>
  

  
  

  
        <div className="mt-3 text-xs flex justify-between items-center text-[#3a4d56]">
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">تسجيل الدخول</button>
          <p>لديك حساب ؟</p>
        </div>
      </div>
  
      

    </div>
    {session?.user ? (redirect('/Home')):(" ")}
  </section>

  )
}

export default SignUp
