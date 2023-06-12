import React from 'react';
// import data
import { services } from '../data';
// import components
import Cards from './Cards';

const Services = () => {
  // destructure product data
  const { header, title, subtitle } = services;
  return (
    <section className='section pt-20 pb-10 lg:pt-[80px] lg:pb-20 bg-grey' dir="rtl">
      <div className='container mx-auto'>
      <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold ">
                {header}
              </span>
              <h2
                className="mb-4 text-5xl font-bold text-dark sm:text-5xl md:text-[40px]"
              >
                {title}
              </h2>
              <p className="" dir="rtl">
                {subtitle}
              </p>
            </div>
          </div>
        <Cards />
      </div>
    </section>
  );
};

export default Services;
