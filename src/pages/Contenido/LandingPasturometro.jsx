import React from 'react'

import vista1 from '../../assets/images/vistas_1.png'
import vista2 from '../../assets/images/vistas_2.png'
import Circulo from '../../components/Circulo'

const LandingPasturometro = () => {
  return (
    <section className='flex justify-center text-center items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
        <div className=" w-1/2 px-10 max-md:px-0 max-md:w-full flex relative flex-row  justify-between items-start rounded-[2%] m-14 max-md:m-0 max-md:flex-col max-md:justify-center ">
                            <img src={vista1} alt="Whatsapp" className='z-30 max-md:self-end w-[25%] max-md:w-[50%]' />
                            <Circulo 
                            color = 'first-green' bg ='bg-white'
                            position = 'left-[0%] bottom-[-12%] max-md:bottom-[-5%] max-md:left-[-20%]'
                            ></Circulo>
                            <img src={vista2} alt="Whatsapp"  className='z-30 max-md:self-start w-[25%] max-md:w-[50%] ' />
                            <Circulo 
                            color = 's-green' bg = 'bg-white'
                            position = 'right-[0%] top-[-3%] max-md:top-[0%] max-md:right-[-20%] '
                            ></Circulo>
        </div>

        <div className='max-md:mt-10 w-1/2 flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-full px-8 '>
            <p className = {`py-9 font-normal text-xl`}> Es un <strong>dispositivo inteligente</strong> de medición de altura comprimida de pasto, que mediante lecturas electrónicas georeferenciadas y algoritmos integrados a una <strong>aplicación del teléfono móvil</strong>, estima de forma <strong>confiable y en tiempo real</strong> la cantidad de pasto que hay disponible para los animales en cada zona o potrero del campo.<br></br><br></br>Su diseño ergonómico facilita la manipulación del equipo y una interfaz amigable simplifica la interpretación de los datos.<br></br><br></br>El <strong>pasturómetro</strong> electrónico <strong>Pastech</strong> es un desarrollo local pensado para ser utilizado eficazmente en los sistemas ganaderos de nuestro país. Asimismo, es un producto que incorpora tecnología innovadora y puede usarse adecuadamente en una amplia diversidad de cubiertas vegetales.

        </p>
        </div>
 </section>
  )
}

export default LandingPasturometro