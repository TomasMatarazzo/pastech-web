import React from 'react'

import LandingPasturometro from './LandingPasturometro'
import CirculosPasturometro from './CirculosPasturometro'
import CirculosStepPasturometro from './CirculosStepPasturometro'
import Titulo from '../../components/Titulo'

const Pasturometro = ({titulo}) => {

  const titulos = [
    "Medición de altura comprimida de pasto",
    "Aplicación móvil integrada",
    "Diseño",
    "Inteligencia Artificial",
    "Versatilidad"
  ];

  const titulos2 = ['PASTURÓMETRO','CELULAR','SISTEMA WEB']

  return (
    <>
    {/* <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Productos</h1>
    </div> */}
    <Titulo titulo ="Pasturómetro Electrónico"></Titulo>
    <LandingPasturometro></LandingPasturometro>
    <div className="max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <CirculosPasturometro titulos = {titulos} isPasturometro={true}></CirculosPasturometro>
    <div className=" max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <CirculosStepPasturometro
      textos = {['Dispositivo electronico que permite medir el pasto y georeferenciar la ubicación.','Mediante una aplicación movil es posible visualizar y procesar los datos suministrados por el pasturometro','Sistema de acceso web que te permite consultar las mediciones realizadas en tu campo y calcular indicadores']}
      titulos={titulos2}
      img1 = {false}
      img2 = {false}
    
    ></CirculosStepPasturometro>

    </>
  )
}

export default Pasturometro