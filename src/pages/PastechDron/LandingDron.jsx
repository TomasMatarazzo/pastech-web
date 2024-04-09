import React from 'react'
import satelite from '../../assets/images/dron-logo.png'
import logo from '../../assets/images/logox.png'

const LandingDron = ({imagen,texto}) => {
  return (
    <section className=' relative pt-12 flex text-center justify-evenly items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
        <div className=" max-md:px-0 w-[20vw]  max-md:w-full flex relative flex-row  justify-center items-start rounded-[2%] max-md:m-0 max-md:flex-col max-md:justify-center ">
                            <img src={satelite} alt="Whatsapp" className='z-30 self-center' />
                            
        </div>

        <div className=' w-[50vw] max-md:mt-10 flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-full px-8  max-md:px-0 '>
        <p class=" py-9 font-normal text-xl">El desarrollo en tecnología de <strong>sensores remotos</strong> ha lanzado al mercado nuevas alternativas para el monitoreo de cultivos mediante la <strong>recopilación de datos espectrales</strong> en diferentes longitudes de onda. La incorporación de estos <strong>sensores multiespectrales</strong> en drones permite estimar mediante vuelos programados la variación espacial de pasto disponible a nivel de parcela, de forma rápida, precisa y con una resolución de hasta <strong>2 cm</strong>. <br></br><br></br>Las imágenes recolectadas por drones tienen la ventaja de evitar los problemas atmosféricos como la cobertura de nubes. Otras de las ventajas del uso de drones es que permiten de forma relativamente fácil programar vuelos en función de las necesidades particulares del usuario. Así, es posible adquirir datos con muy <strong>alta resolución</strong>  a lo largo de la serie temporal de imágenes que uno desee, para generar información dinámica del crecimiento de las pasturas, al tiempo que permite la detección precisa de la <strong>heterogeneidad espacial</strong>, incluso a muy pequeña escala (ej parche). <br></br><br></br>
Pastech cuenta con su propio <strong>protocolo de base científica</strong> para la calibración del drone que nos hace ser líderes a nivel mundial en la precisión de la estimación de pasto mediante esta herramienta.</p>
        </div>
        <div className=" w-[20vw] max-md:px-0"></div>
        <div className=" w-[20vw] right-[-10vw] max-md:hidden absolute px-4 max-md:px-0">
                    <img src={logo} alt="Whatsapp" className='z-30 self-center' />             
        </div>
 </section>
  )
}

export default LandingDron