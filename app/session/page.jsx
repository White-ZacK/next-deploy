"use client";
import { useEffect, useState } from 'react';
import { signOut, useSession } from "next-auth/react";

// import aos css
import 'aos/dist/aos.css';

import { useRouter } from 'next/navigation';
import PageRight from '@components/PageRight';
import PageLeft from '@components/PageLeft';
import Call from '@components/Call';

const Home = () => {

  const router = useRouter();
  const { data: session } =  useSession();



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

  return (
    <div className='flex flex-row juctify-center items-center juctify-space-between center h-screen pt-2 overflow-hidden	'>
    
        <PageLeft />
        <Call />
        <PageRight />

    </div>
  )
}

export default Home