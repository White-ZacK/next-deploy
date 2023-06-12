import Image from 'next/image';
// import data
import { services } from '../data';


const Cards = () => {
    const {cards} = services
    return(
        <div className='-mx-4 flex flex-wrap place-content-around'>
            {cards.map((card, cardIndex) => {return(
                          <div className="w-full px-4 md:w-1/2 lg:w-1/3" dir='rtl' data-aos='fade-up' data-aos-delay={card.delay} >
                          <div
                            className="card"
                          >
                            <div
                              className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary mx-auto "
                            >
                                <Image src={card.icon} alt='' />
                            </div>
                            <h4 className="mb-3 text-xl font-semibold text-dark text-center">
                              {card.title}
                            </h4>
                            <p className="text-body-color text-center">
                              {card.subtitle}
                            </p>
                          </div>
                        </div>
            )})}
        </div>
    )
};

export default Cards;
