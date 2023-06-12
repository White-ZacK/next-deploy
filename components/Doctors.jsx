import Image from "next/image"
import {doctors} from "../data"

const Doctors = () => {
    const {title,doctor} = doctors;
    let delay = 200;
    return (
        <section className='section' id="Doctors" dir="rtl">
            <h2 className='h2 mb-10 lg:mb-20 text-center'>{title}</h2>
            <div className='container mx-auto -mx-4 flex flex-wrap place-content-around'>
            {doctor.map((doc, cardIndex) => {return(
                <div className="doctor " >
                    <div className="doctor_card" data-aos='fade-up' data-aos-delay={cardIndex*200}>
                     <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-accent p-2 mx-auto "> <Image src={doc.icon} /></div>
                    <h4 className="mb-3 text-xl font-semibold text-dark text-center">
                              {doc.name}
                            </h4>
                            <p className="text-body-color text-center">
                              {doc.desc}
                            </p>
                    </div>
                </div>

                
            )})}
            </div>
        </section>
  )
}

export default Doctors