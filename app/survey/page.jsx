"use client";
import { useEffect } from 'react';
// import aos css
import 'aos/dist/aos.css';
import Header from '@components/Header';
import Quiz from '@components/Quiz';
import Footer from '@components/Footer';
const page = () => {
    useEffect(() => {
        const initializeAOS = async () => {
          const AOS = (await import('aos')).default;
          AOS.init({
            disable: true,
            duration: 1000,
            offset: 100,
          });
        };
    
        if (typeof window !== 'undefined') {
          initializeAOS();
        }
      }, []);
    return (
    <>
    <Header />
    <Quiz />
    <Footer />
    </>
  )
}

export default page