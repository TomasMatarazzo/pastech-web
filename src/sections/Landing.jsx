import { useState } from "react";
import { SlArrowRight,SlArrowLeft } from 'react-icons/sl';
import image0 from "../assets/icons/icono.svg"
import image1 from "../assets/images/01.jpg"
import image2 from "../assets/images/02.jpg"
import image3 from "../assets/images/03.jpg"
import image4 from "../assets/images/04.jpg"

const Landing = () => {

    const slides = [
        {
          texto:null,
          descripcion:null,
          url: null,
          wrap: "text-nonwrap"
        },
        {
          texto:"PASTURÓMETRO ELECTRÓNICO",
          descripcion:"Pasturómetro electrónico con mediciones georeferenciadas",
          url: image1,
          wrap: "text-nonwrap"
        },
        {
          texto:"PASTECH SATELITAL",
          descripcion:"Mediciones automáticas con satélites",
          url: image2,
          wrap: "text-nowrap"
        },
        {
          texto:"PASTECH DRON",
          descripcion:"Mediciones manuales utilizando drones",
          url: image3,
          wrap: "text-nowrap"
        },
    
        {
          texto:"SERVICIOS",
          descripcion:"Gestion de mediciones y datos para la toma de decisiones",
          url: image4,
          wrap: "text-nowrap"
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


      const transition = (index === 0 || index === 1 || index === 4) ? " transition-none" : "duration-1000 ease-in-out transition-all"
      console.log(index)
  return (
    <>
    <section
        id = "home"
        className = {`${transition} relative w-screen  flex xl:flex-row flex-col justify-center max-md:ml-[50px] md:min-h-screen gap-10 py-2 bg-center bg-cover max-md:w-[60%] max-md:gap-0 max-md:m-auto self-center `}
        style={{ backgroundImage: `url(${slides[index].url})` }}>
          { index === 0 ? <img src = {image0}></img> : null }
      {/* Left Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <SlArrowLeft onClick={decreaseIndex} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <SlArrowRight onClick={increaseIndex} size={30} />
      </div>
      { index != 0 ?
        <div className = {` font-["Roboto"] absolute max-md:top-[60%] max-md:left-10 top-2/3 left-[50%] `}>
          <h1 className={`max-md:text-2xl  leading-[60px] max-md:border-0 ${slides[index].wrap} ${transition}  border-solid border-b-4 border-t-green text-[#fff] font-[Roboto] z-5 min-w-64 max-w-min whitespace-normal text-[60px] opacity-1 font-extrabold cursor-pointer `}>{slides[index].texto}</h1>
          <div className="flex flex-row justify-center align-middle">
            <h2 className={` ${transition} max-md:text-2xl max-md:hidden max-md:border-0 ${slides[index].wrap} text-[#fff] font-[Roboto] z-5 min-w-64 whitespace-normal text-2xl opacity-1 font-normal w-[100%] cursor-pointer  `}>{slides[index].descripcion}
            <span style={{"font-size": "1.2em", "color":"green"}} className="relative top-1">
              <i className="fa-solid fa-caret-right"></i>
            </span>
            </h2>
          </div>
          </div> :    
          <div className='arrow max-md:hidden'>
            <span></span>
            <span></span>
          </div>
        }
    </section>
    </>
  )
}

export default Landing