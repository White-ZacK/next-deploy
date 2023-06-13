"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

const SignIn = () => {
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

    <div className=" lg:bg-[url('/assets/images/password.svg')] bg-auto bg-no-repeat bg-white bg-cover flex rounded-2xl lg:min-w-[850px] shadow-lg  p-5 items-center" data-aos='fade-right' data-aos-delay='200'>
    <div className="md:block hidden lg:w-1/2"></div>
      <div className="lg:w-1/2 px-8 md:px-16 text-right" data-aos='fade-down'data-aos-delay='400'>
        <h2 className="font-bold text-2xl text-[#3a4d56]">تسجيل الدخول</h2>
        <p className="text-xs mt-4 text-[#3a4d56]">ليس لديك حساب ؟ قم بالتسجيل الآن</p>
  
        <form action="" className="flex flex-col gap-4">
          <input className="p-3 pr-6 mt-8 rounded-xl border text-right" type="email" name="email" placeholder="البريد الإلكتروني" />
          <div className="relative">
            <input className="p-3 pr-6 rounded-xl border w-full  text-right" type="password" name="password" placeholder="كلمة المرور" />
          </div>
          <button type="button" className="bg-[#4cab94] rounded-xl text-white py-2 hover:scale-105 duration-300">تسجيل الدخول</button>
        </form>
  
        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-[#3a4d56]" />
          <p className="text-center text-sm">أو</p>
          <hr className="border-[#3a4d56]" />
        </div>
  
        <button onClick={() => {signIn("google");}} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#3a4d56]">
        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
          تسجيل الدخول بحساب جوجل
        </button>

        <button onClick={() => {signIn("facebook");}} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#3a4d56]">
        <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="88.428 12.828 107.543 207.085" id="facebook"><path fill="#3c5a9a" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"></path></svg>
          تسجيل الدخول بحساب فيسبوك
        </button>
  
        <div className="mt-5 text-xs border-b border-[#3a4d56] py-4 text-[#3a4d56] text-right">
          <a href="#">نسيت كلمة المرور ؟</a>
        </div>
  
        <div className="mt-3 text-xs flex justify-between items-center text-[#3a4d56]">
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">التسجيل</button>
          <p>ليس لديك حساب ؟</p>
        </div>
      </div>
  
      

    </div>
    {session?.user ? (redirect('/Home')):(" ")}
  </section>

  )
}

export default SignIn