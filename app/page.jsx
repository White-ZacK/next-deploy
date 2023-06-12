"use client";
import { useEffect } from 'react';
// import aos css
import 'aos/dist/aos.css';



// import components
import Header from '@components/Header';
import Hero from '@components/Hero';
import Overview from '@components/Overview';
import Brands from '@components/Brands';
import Feature1 from '@components/Feature1';
import Feature2 from '@components/Feature2';
import Feature3 from '@components/Feature3';
import Services from '@components/Services';
import Doctors from '@components/Doctors';

import Pricing from '@components/Pricing';
import Quiz from '@components/Quiz';
import Testimonials from '@components/Testimonials';
import Cta from '@components/Cta';
import Footer from '@components/Footer';

const App = () => {
  useEffect(() => {
    const initializeAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        disable: false,
        duration: 600,
        offset: 0,
      });
    };

    if (typeof window !== 'undefined') {
      initializeAOS();
    }
  }, []);
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Services />
      <Doctors />
      <Quiz />
      <Footer />
      {/*
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Pricing />
      <Cta />
      <Testimonials />
      */} 
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;