import React from 'react'
import satelite from '../../assets/images/satelite-logo.png'

const LandingSatelital = ({imagen,texto}) => {
  return (
    <section className='flex justify-center text-center items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
        <div className=" w-1/2 px-10 max-md:px-0 max-md:w-full flex relative flex-row  justify-center items-start rounded-[2%] m-14 max-md:m-0 max-md:flex-col max-md:justify-center ">
                            <img src={satelite} alt="Whatsapp" className='z-30 w-[50%] max-md:w-[50%] self-center' />
                            
        </div>

        <div className='max-md:mt-10 w-1/2 flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-full px-8 '>
            <p className = {`py-9 font-normal text-xl`}><strong>Pastech Satelital</strong> es una <strong>aplicación</strong> de <strong>acceso web</strong> que permite determinar múltiples <strong>indicadores</strong> vinculados con el <strong>pasto</strong> y <strong>administrar</strong> varios potreros. Esta aplicación permite <strong>generar</strong> <strong>predicción inteligente</strong></p>
            <p className = {`py-9 font-normal text-xl text-[#626262]`}>Mediante la integración de datos de <strong>sensores remotos</strong> montados en <strong>satélites</strong> junto con modelos <strong>biofísicos clima-dependientes</strong> e <strong>inteligencia artificial</strong>, logramos estimar con precisión las variaciones espaciales y temporales del crecimiento y disponibilidad de las pasturas en relación a las condiciones edafo-climáticas de cada sitio en particular. En este sentido, nuestra herramienta de base satelital representa una <strong>confiable herramienta</strong> para las estimaciones de disponibilidad de pasto en el campo de forma remota, proporcionando así predicciones para guiar proactivamente las recomendaciones de manejo del pastoreo.</p>

        </div>
 </section>
  )
}

export default LandingSatelital