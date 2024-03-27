import React from 'react'

import vista1 from '../../assets/images/vistas_1.png'
import vista2 from '../../assets/images/vistas_2.png'
import Circulo from '../../components/Circulo'

const LandingPasturometro = ({imagen,texto}) => {
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
            <p className = {`py-9 font-normal text-xl`}>Es un dispositivo <strong>inteligente</strong> de medición de altura comprimida de <strong>pasto</strong>, que mediante lecturas electrónicas <strong>georreferenciadas</strong> y <strong>algoritmos integrados</strong> a una aplicación del <strong>teléfono móvil</strong>, estima de forma confiable y en <strong>tiempo real</strong> la cantidad de pasto que hay disponible para los animales en cada <strong>zona</strong> o <strong>potrero</strong> del campo. <br></br><br></br>Su diseño <strong>ergonómico</strong> facilita la manipulación del equipo y una interfaz amigable de la <strong>App</strong> simplifica la interpretación de los datos para la toma de decisiones en cuanto al manejo de la pastura y los animales.<br></br> Asimismo, es un producto que incorpora tecnología de <strong>sensores</strong> que permite utilizarse adecuadamente sin necesidad de cables ni funcionamientos mecánicos más propensos al desgaste.


        </p>
        </div>
 </section>
  )
}

export default LandingPasturometro