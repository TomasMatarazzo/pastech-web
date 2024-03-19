import React from 'react'

import LandingPasturometro from './LandingPasturometro'
import CirculosPasturometro from './CirculosPasturometro'
import CirculosStepPasturometro from './CirculosStepPasturometro'
import Titulo from '../../components/Titulo'

const ContenidoPasturometro = () => {

    const data = [
        {
          pregunta: "Mapeo de la disponibilidad de pasto",
          respuesta: `Es un dispositivo inteligente de medición de
          altura comprimida de pasto, que mediante
          lecturas electrónicas georeferenciadas y
          algoritmos integrados a una aplicación del
          teléfono móvil, estima de forma confiable y en
          tiempo real la cantidad de pasto que hay
          disponible para los animales en cada zona o
          potrero del campo. Su diseño ergonómico
          facilita la manipulación del equipo y una
          interfaz amigable simplifica la interpretación
          de los datos. El pasturómetro electrónico
          Pastech es un desarrollo local pensado para ser
          utilizado eficazmente en los sistemas ganaderos
          de nuestro país. Asimismo, es un producto que
          incorpora tecnología innovadora y puede usarse
          adecuadamente en una amplia diversidad de
          cubiertas vegetales.
          `
        }]




  return (
    <>
    {/* <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Productos</h1>
    </div> */}
    <Titulo titulo ="Pasturometro Electrónico"></Titulo>
    <LandingPasturometro></LandingPasturometro>
    <div className="max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <CirculosPasturometro></CirculosPasturometro>
    <div className=" max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <section className='flex justify-center items-start xl:padding-1  max-md:pt-[20px] max-md:flex-col max-md:w-[100%]'>
       {/* <div className=" w-full  max-md:w-full flex relative justify-evenly items-end rounded-[2%] p-8 ">
        

        </div> */}
        {/* <div className='w-[40%] flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-full p-8'>
            <p className = {` py-9 font-normal text-xl `}> Es un <strong>dispositivo inteligente</strong> de medición de altura comprimida de pasto, que mediante lecturas electrónicas georeferenciadas y algoritmos integrados a una <strong>aplicación del teléfono móvil</strong>, estima de forma <strong>confiable y en tiempo real</strong> la cantidad de pasto que hay disponible para los animales en cada zona o potrero del campo.<br></br><br></br>Su diseño ergonómico facilita la manipulación del equipo y una interfaz amigable simplifica la interpretación de los datos.<br></br><br></br>El <strong>pasturómetro</strong> electrónico <strong>Pastech</strong> es un desarrollo local pensado para ser utilizado eficazmente en los sistemas ganaderos de nuestro país. Asimismo, es un producto que incorpora tecnología innovadora y puede usarse adecuadamente en una amplia diversidad de cubiertas vegetales.

          </p>
        </div> */}
    </section>
    <CirculosStepPasturometro></CirculosStepPasturometro>

    </>
  )
}

export default ContenidoPasturometro