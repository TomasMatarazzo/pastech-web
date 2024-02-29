import React from 'react'
import image1 from "../assets/images/03.jpg"

const TextoEmpresa = () => {
  return (
    <section className="flex relative max-md:flex-col rounded-[2%] ">
    <div className = {`font-extralight bg-blue  h-full w-full max-md:flex-col max-md:items-center max-md:align-middle px-10 flex flex-row py-16 max-md:py-10 bg-s-green rounded-lg justify-evenly`}>
        <img 
                    className = {`w-[475px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 rounded-[1%]`}
                        src = {image1}
                        width = {1000}
                        height = {674}
                    />
        <div className='w-[40%] flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
            <h1 className={` py-2 text-3xl max-md:text-[32px] font-bold  leading-8 text-first-green`}>PASTECH</h1>
            <h1 className={` font-semibold  leading-8 text-3xl py-2  max-md:text-[32px] text-gray-500`}>Pastech es una empresa dedicada al desarrollo y la implementación de tecnología para la gestión eficiente
            del pasto en establecimientos ganaderos</h1>
            <p className = {` py-9 font-normal text-xl `}>Nuestra actividad se centra en facilitar la recolección de
            información mediante dispositivos electrónicos que arrojan datos precisos para la toma de decisiones. Nos
            especializamos en la venta de dispositivos electrónicos de medición y ofrecemos servicios de monitoreo y
            gestión del pasto.</p>
        </div>

    </div>
</section>
  )
}

export default TextoEmpresa