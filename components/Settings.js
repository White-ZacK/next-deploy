const Settings = () => {
    const wdays = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ];
    const hours = Array.from({ length: 13 }, (_, index) => index + 8);
  return (
    <div className='w-3/5 text-center min-h-full bg-gray-100 rounded-[3rem] ' data-aos='fade-up' data-aos-delay='400'>
        
        <div className="flex flex-col pt-8 px-8 gap-4 w-full justify-between ">

            <div className='text-right ml-auto'>
                <h2 className='text-4xl mb-2'>إعدادات الحساب</h2>
                <p className='text-sm text-gray-600'>إضغط تعديل ، لتعديل معلوماتك الشخصية</p>
            </div>
            <div className="flex flex-row bg-white w-full h-full rounded-[3rem] h-[34rem]">
                <div className="w-4/5 border-r-2   rounded-[2rem]">
                {wdays.map((day,index)=>{return(
 
                    <div className="w-full flex" dir='rtl'>
                        <div className="day_name">{day}</div>
                        <div className="w-90/100 bg-blue-500">
                            <div className="h-1/2 bg-green-500">dfg</div>
                            <div className="h-1/2 bg-yellow-500">يبل</div>
                        </div>
                    </div>
                   ) } ) }
                </div>
                <div className="flex flex-col w-1/5  py-40 gap-8">
                    <p className=" rounded-full mx-5 py-2">حسابي</p>
                    <p className="hover:bg-grey rounded-full mx-5 py-2">الاشعارات</p>
                    <p className="bg-gray-200 rounded-full mx-3 p-2">برنامج الجلسات</p>
                    <p className="hover:bg-grey rounded-full mx-5 py-2 text-red-500">حذف الحساب</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Settings