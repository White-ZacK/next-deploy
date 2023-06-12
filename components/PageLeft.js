import { HiOutlineChevronDown } from 'react-icons/hi';
import { signOut, useSession } from "next-auth/react";
const PageLeft = () => {
  const { data: session } = useSession();
  return (
    
    <div className='w-1/5 text-center min-h-full pt-10'>

    <div className='flex items-center text-right gap-x-2 p-2 m-2 rounded-lg profile_hover cursor-pointer' data-aos='fade-down' data-aos-delay='600'>

        <HiOutlineChevronDown />
        <div>
          <h3>{session?.user.name}</h3> 
          <p className='text-xs text-gray-400'>{session?.user.email}</p>
        </div>
        <img src={session?.user.image} className='w-11 h-11 rounded-full' />


    </div>

  </div>
  )
}

export default PageLeft