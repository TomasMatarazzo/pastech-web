import { useState } from "react";
import { SlArrowRight,SlArrowLeft } from 'react-icons/sl';
import image1 from "../assets/images/01.jpg"
import image2 from "../assets/images/02.jpg"
import image3 from "../assets/images/03.jpg"
import image4 from "../assets/images/04.jpg"

const Landing = () => {

    const slides = [
        {
          texto:"PASTUROMETRO ELECTRÓNICO",
          url: image1,
        },
        {
          texto:"PASTECH SATELITAL",
          url: image2,
        },
        {
          texto:"PASTECH DRON",
          url: image3,
        },
    
        {
          texto:"SERVICIOS",
          url: image4
        }
      ];

      const [index, setIndex] = useState(0)

      const decreaseIndex = () =>{
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    }
      const increaseIndex = ()=> {
        const isLastSlide = index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
      }


  return (
    <section
        id = "home"
        className = "relative w-screen flex xl:flex-row flex-col justify-center min-h-screen gap-10 py-2 bg-center bg-cover duration-500 max-md:min-h-[411px] "
        style={{ backgroundImage: `url(${slides[index].url})` }}>
      {/* Left Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <SlArrowLeft onClick={increaseIndex} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <SlArrowRight onClick={decreaseIndex} size={30} />
      </div>
        <div className = "absolute top-2/3 left-[823px] border-solid border-b-8 border-t-green text-[#fff] font-[Lato] z-5 min-w-64 max-w-min whitespace-normal text-[70px] leading-[70px] opacity-1 font-extrabold cursor-pointer transition-none ease">{slides[index].texto}</div>
    </section>
  )
}

export default Landing