import React from 'react'

import CirculosPasturometro from '../Contenido/CirculosPasturometro'
import CirculosStepPasturometro from '../Contenido/CirculosStepPasturometro'
import Titulo from '../../components/Titulo'
import LandingDron from './LandingDron'
import imagenSatelite from '../../assets/images/circuloSatelite.png'
import imagenUsuario from '../../assets/images/circuloUsuario.jpeg'

const PastechDron = ({titulo}) => {

 const titulos = ['Lecturas espectrales','Alta resolución', 'Protocolo propio','Inteligencia Artificial','Múltiples indicadores']

 const titulos2 = ['REGISTRO', 'LECTURA Dron','SISTEMA WEB']
 const textos = [
  "Generá un usuario y comenzá a utilizar Pastech Dron",
  "Consulta y almacenamiento de las imágenes Drones de tus potreros",
  "Sistema de acceso web que permite consultar las mediciones realizadas en el campo y calcular indicadores."
  ];
  
  return (
    <>
    {/* <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Productos</h1>
    </div> */}
    <Titulo titulo ="Pastech Dron"></Titulo>
    <div className={`flex relative  justify-center items-center flex-col rounded-[2%] max-md:text-center`}>
        <h1 className= {` inline-block  pb-0 text-2xl leading-[30px] max-md:text-[20px] font-bold text-t-green font-[Roboto]`}>Mediciones remotas de stock de pasto con drones y algoritmos de calibración</h1>
    </div>
    <LandingDron></LandingDron>
    <div className="max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <CirculosPasturometro titulos={titulos}></CirculosPasturometro>
    {/* <div className=" max-md:hidden m-auto flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    <CirculosStepPasturometro
      textos={textos}
      titulos={titulos2}
      img1 = {imagenUsuario}
      img2 = {imagenSatelite}
    ></CirculosStepPasturometro> */}

    </>
  )
}

export default PastechDron