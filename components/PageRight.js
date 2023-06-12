import { signOut } from "next-auth/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image"
import { header } from '@data';
import { rightpage } from '@data';
import CustomIcon from "@utils/CustomIcons";
import { BiHomeSmile , BiLogOut , BiCog , BiMessageDetail ,BiCalendar} from 'react-icons/Bi';




const { logo } = header;

const PageRight = () => {
  const {pages} = rightpage;
  const pathname = usePathname();

  return (

        <div className='flex flex-col w-1/5 min-h-full place-items-center text-accent'>
          <a data-aos='fade-down' data-aos-delay='200' className='p-30 h-10 w-28 mx-auto mt-12 mb-20' href='#'  ><Image src={logo}/></a>

           {pages.map((link) => {
            const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  className={`${isActive ? 'btn-accent shadow-md' : ''} home-btn`}
                  href={link.href}
                >
                  {link.title} 
                  <CustomIcon icon={link.icon} />
                </Link>
              );
           })}
           
        <button data-aos='fade-left' data-aos-delay='900' className='home-btn mt-[100px]' onClick={() => {signOut()}}>الخروج<BiLogOut /></button>
        </div>

  )
}

export default PageRight