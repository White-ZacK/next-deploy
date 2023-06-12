import Image from 'next/image';

// import data
import { overview } from '@data';

const Brands = () => {
  // destructure overview
  const { brands } = overview;
  return (
    <section className='py-9'>
       <h2 className='h2 text-4xl mb-10 lg:mb-20 text-center'>: يثق فنا كل من </h2>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between px-20 space-y-6'>
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos='fade-up' data-aos-delay={delay} className='cursor-pointer'>
              {/* brand img */}
              <Image src={image} width={180} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
