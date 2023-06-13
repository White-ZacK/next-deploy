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
                <h2 className='text-4xl mb-2'>الرسائل</h2>
                <p className='text-sm text-gray-600'>رسائل التواصل مع المختصين</p>
            </div>
            <div className="flex flex-row bg-white w-full h-full rounded-[3rem] h-[34rem]">
                <div className="w-4/5 border-r-2  items-center content-center align-center pt-4 rounded-[2rem]">
                    <h4 >لا يوجد لديك رسائل بعد</h4>
                </div>
                <div className="flex flex-col w-1/5  py-40 gap-8">
                    <p className=" rounded-full mx-5 py-2">الرسائل</p>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Settings