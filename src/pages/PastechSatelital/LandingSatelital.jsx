import React from 'react'
import satelite from '../../assets/images/satelite-logo.png'

const LandingSatelital = ({imagen,texto}) => {
  return (
    <section className='flex justify-center text-center items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
        <div className=" w-1/2 px-10 max-md:px-0 max-md:w-full flex relative flex-row  justify-center items-start rounded-[2%] m-14 max-md:m-0 max-md:flex-col max-md:justify-center ">
                            <img src={satelite} alt="Whatsapp" className='z-30 w-[50%] max-md:w-[50%] self-center' />
                            
        </div>

        <div className='max-md:mt-10 w-1/2 flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-full px-8 '>
            <p className = {`py-9 font-normal text-2xl`}><strong>Pastech Satelital</strong> es una <strong>aplicación</strong> de <strong>acceso web</strong> que permite <strong>determinar</strong> múltiples <strong>indicadores</strong> vinculados con el <strong>pasto</strong> y <strong>administrar</strong> varios <strong>potreros</strong>. Esta <strong>aplicación</strong> permite <strong>generar</strong> <strong>predicción inteligente</strong>


        </p>
        </div>
 </section>
  )
}

export default LandingSatelital