import React from 'react'

const TarjetaServicios = ({data}) => {
  return (
    <div className='relative flex justify-center w-[100%] items-center px-14 max-md:px-0 max-md:flex-col max-md:pt-[20px] bg-[#f1f4f6]'>
        <ul className='relative w-[100%] flex gap-8 flex-wrap text-left max-md:text-center max-md:gap-0 max-md:px-4 max-md:mb-20  max-md:items-center justify-start  pb-16 flex-col '>
        {data.map((item, index) => (
            <div className='flex items-center  relative w-[100%] max-md:items-start max-md:justify-center max-md:h-[500px] max-md:mb-10'>
                <li key={index} className={` ${item.circulo} border-[6px] bg-white z-20 text-center flex flex-col items-center justify-center shadow-lg w-[20vw] h-[20vw] relative  max-md:w-[200px] max-md:h-[200px] max-md:p-8  border-[50%]  rounded-full transition-all duration-500 hover:bg-slate-200 text-wrap`}>
                    <h1 className='pt-4 p-4 font-medium text-2xl max-md:text-xl font-[Roboto] max-md:text-[20px] max-md:font-semibold md:whitespace-pre-line'>{item.pregunta}</h1>
                </li>
                <div className={` max-md:top-[20%]  max-md:mb-[450px] max-md:w-[100%] max-md:h-[400px] max-md:px-4 max-md:pt-8  shadow-xl bg-first-green w-[90%]  justify-center absolute  h-[250px] flex text-center pl-[15vw] pr-10  right-0 items-center  `}>
                    <p className='{` py-9 font-medium text-xl  text-center  max-md:text-lg max-md:text-center `}'>{item.respuesta}</p>
                </div>
            </div>
                ))}
        </ul>
</div>
  )
}

export default TarjetaServicios