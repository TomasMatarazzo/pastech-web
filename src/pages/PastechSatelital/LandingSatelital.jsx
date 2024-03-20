import React from 'react'

const LandingSatelital = ({imagen,texto}) => {
  return (
    <section className='flex justify-center text-center items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
        <div className=" w-1/2 px-10 max-md:px-0 max-md:w-full flex relative flex-row  justify-between items-start rounded-[2%] m-14 max-md:m-0 max-md:flex-col max-md:justify-center ">
                            {/* <img src={vista1} alt="Whatsapp" className='z-30 max-md:self-end w-[25%] max-md:w-[50%]' />
                            <Circulo 
                            color = 'first-green' bg ='bg-white'
                            position = 'left-[0%] bottom-[-12%] max-md:bottom-[-5%] max-md:left-[-20%]'
                            ></Circulo>
                            <img src={vista2} alt="Whatsapp"  className='z-30 max-md:self-start w-[25%] max-md:w-[50%] ' />
                            <Circulo 
                            color = 's-green' bg = 'bg-white'
                            position = 'right-[0%] top-[-3%] max-md:top-[0%] max-md:right-[-20%] '
                            ></Circulo> */}
        </div>

        <div className='max-md:mt-10 w-1/2 flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-full px-8 '>
            <p className = {`py-9 font-normal text-2xl`}><strong>Pastech Satelital</strong> es una <strong>aplicación</strong> de <strong>acceso web</strong> que permite <strong>determinar</strong> múltiples <strong>indicadores</strong> vinculados con el <strong>pasto</strong> y <strong>administrar</strong> varios <strong>potreros</strong>. Esta <strong>aplicación</strong> permite <strong>generar</strong> <strong>predicción inteligente</strong>


        </p>
        </div>
 </section>
  )
}

export default LandingSatelital