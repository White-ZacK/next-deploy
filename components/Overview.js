import Image from "next/image";
// import data
import { overview } from '@data';

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-end overflow-hidden'>
        <img 
        src={"/assets/images/product.svg"}
        alt=' '
        data-aos='fade-up' 
        data-aos-offset='300' />
        
      </div>
    </section>
  );
};

export default Overview;
