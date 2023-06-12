"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import data
import { header } from '@data';
// import icons
import { HiMenuAlt4, HiOutlineX, HiOutlineChevronDown } from 'react-icons/hi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
// import components
import MobileNav from '@components/MobileNav';
import Nav from '@components/Nav';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, SignIn, SignUp,LogOut } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'shadow-md' : ''} bg-white lg:top-0 py-6 lg:py-0 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
      
      
  
       
        <div className='hidden lg:flex justify-self-start'>
        
          <button
              className='btn btn-sm btn-accent mr-4'
              data-aos='fade-down'
              data-aos-delay='1200'
            >
              {SignUp}
            </button>
            
            <button
              onClick={() => router.push('/signin')}
              data-aos='fade-down'
              data-aos-delay='1400'
            >
              {SignIn}
            </button>
        </div>


        {/* nav - initially hidden - show on desktop mode */}
        <div
          className='hidden lg:flex '
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className='lg:hidden z-[999]' onClick={() => setMobileNav(!mobileNav)}>

          {mobileNav ? (
            <HiOutlineX className='text-3xl text-white' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        {/* logo */}
        <a href='#' className='w-16 lg:w-40' data-aos='fade-down' data-aos-delay='1000'>
        <Image
        src={logo}
        />
          
        </a>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
