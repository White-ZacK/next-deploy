"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import data
import { hero } from '@data';
// import icons
import { HiOutlineChevronDown } from 'react-icons/hi';

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, compText, image } = hero;
  
  const router = useRouter();
  return (
    <section className='h-screen bg-hero bg-cover bg-left-top'>
      <div className='container mx-auto h-screen-[-60px] mt-10 lg:mt-20 flex justify-center items-center'>
        <div className='flex flex-col flex-col-reverse lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row lg:flex-row-reverse items-center justify-center text-center lg:text-right'>
          {/* text */}
          <div className='flex-1'>
            <h1
              className='lg:leading-[4rem] leading-[2.5rem] lg:text-5xl text-3xl mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {title}
            </h1>
            <p
              className='lead mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>
            {/* btn & comp text */}
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <a className='text-light lg:lead lg:mb-0' href='#questions'>{compText}</a>
              <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4' onClick={() => router.push('#Doctors')}>
                <HiOutlineChevronDown /> {btnText}
              </button>
            </div>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
            <Image src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
