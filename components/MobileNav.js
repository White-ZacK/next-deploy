import React from 'react';
// import data
import { nav } from '../data';

const MobileNav = () => {
  return (
    <div className='bg-accent/95 w-full h-full'>
      <ul className='h-full flex flex-col  items-center gap-y-8 pt-40'>
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className='link text-white text-xl' href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
