import Link from 'next/link';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useSession } from "next-auth/react";
import Calendar from '@components/Calendar';
const PageLeft = () => {
  const { data: session } = useSession();
  return (
    
    <div className='flex flex-col w-1/5  min-h-full pt-10'>

    <div className='flex place-items-center place-content-evenly p-2 m-2 rounded-lg profile_hover cursor-pointer mb-12'  >

      <HiOutlineChevronDown />
      <div>
        <h3>{session?.user.name}</h3> 
        <p className='text-xs text-gray-400'>{session?.user.email}</p>
      </div>
      <img src={session?.user.image} className='w-11 h-11 rounded-full' />

      </div>

  <Calendar />
  {/* session booked */}
    <div className='p-4 '>
        <h1 className=" select-none font-semibold mb-2" dir='rtl'> جلساتي :</h1>
        <div className="flex flex-row border border-gray-300  shadow-sm p-2 rounded-2xl justify-between mb-2" dir='rtl'>     
          <img src="assets/images/pfp/1.jpg" className='w-14 h-16 rounded place-self-center' />
        <div>
            <h3>الدكتور :</h3> 
            <h4 className='text-sm'> سهيل عيجولي</h4> 
            <p className='text-xs text-gray-400'>علاج الإكتئاب</p>
        </div>
        <div className='place-self-center text-center bg-grey p-2 rounded-2xl'>
          <h3>11:00</h3>
          <h3>AM</h3>
        </div>
      </div>
        <div className="flex flex-row border border-gray-300  shadow-sm p-2 rounded-2xl justify-between mb-2" dir='rtl'>     
          <img src="assets/images/pfp/1.jpg" className='w-14 h-16 rounded place-self-center' />
        <div>
            <h3>الدكتور :</h3> 
            <h4 className='text-sm'> سهيل عيجولي</h4> 
            <p className='text-xs text-gray-400'>علاج الإكتئاب</p>
        </div>
        <div className='place-self-center text-center bg-grey p-2 rounded-2xl'>
          <h3>11:00</h3>
          <h3>AM</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageLeft