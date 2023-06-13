"use client";
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import aos css
import 'aos/dist/aos.css';

import { useRouter } from 'next/navigation';
import PageRight from '@components/PageRight';
import PageLeft from '@components/PageLeft';
import PageMid from '@components/PageMid';






const Home = () => {

  const router = useRouter();
  const { data: session } = useSession();
  const storageAnswers = window.localStorage.getItem('ITMAIN_ANSWERS')
  const userId = session?.user.id
  console.log(userId)
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

  const createPrompt = async (e) => {
    

    try {
      const response = await fetch("/api/updatesurvey", {
        method: "POST",
        body: JSON.stringify({
          prompt: storageAnswers,
          userId: userId,
          
        }),
      });

      if (response.ok) {
        " "
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.localStorage.removeItem('ITMAIN_ANSWERS');
    }
  };

  if(storageAnswers && storageAnswers.length>0 && storageAnswers !=[]){
    console.log(storageAnswers)
    console.log('Hi hhh') 
    createPrompt();

    
  }
  return (
    <div className='flex flex-row juctify-center items-center juctify-space-between center h-screen pt-2 overflow-hidden	'>

        <PageLeft />
        <PageMid />
        <PageRight />

    </div>
  )
}

export default Home