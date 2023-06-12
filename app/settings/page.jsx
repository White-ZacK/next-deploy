"use client";
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import aos css
import 'aos/dist/aos.css';

import { useRouter } from 'next/navigation';
import PageRight from '@components/PageRight';
import PageLeft from '@components/PageLeft';
import Settings from '@components/Settings';

const profile = () => {

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

  return (
    <div className='flex flex-row juctify-center items-center juctify-space-between center h-screen pt-2 overflow-hidden	'>

        <PageLeft />
        <Settings />
        <PageRight />

    </div>
  )
}

export default profile