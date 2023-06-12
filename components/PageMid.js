import { MdOutlineNotificationsNone } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
const PageMid = () => {
  return (
    <div className='w-3/5 text-center min-h-full bg-gray-100 rounded-[3rem] ' data-aos='fade-up' data-aos-delay='400'>
        
        <div className="flex p-8 gap-4 w-full justify-between ">
            <div className='relative my-3 cursor-pointer '>
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                3 {/* Notification count */}
                </div>
                <div className='text-3xl p-2 rounded-full bg-white profile_hover'>
                    <MdOutlineNotificationsNone/>
                </div>
            </div>
            <div className='my-3 relative'>
                <input className='rounded-full h-full focus:ring focus:ring-gray-300 focus:outline-none py-2 px-6 text-right text-sm' type='text' placeholder='هل تبحث عن شيئ ؟'></input>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiSearchLine className="text-gray-500" />
                </div>
            </div>
            <div className='text-right ml-auto'>
                <h2 className='text-4xl mb-2'>مرحبا ، زكرياء</h2>
                <p className='text-sm text-gray-600'>كيف تشعر اليوم صباح هذا اليوم؟</p>
            </div>

        </div>

    </div>
  )
}

export default PageMid