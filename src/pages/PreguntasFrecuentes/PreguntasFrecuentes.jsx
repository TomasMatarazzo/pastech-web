import React from 'react'
import Acordeon from './Acordeon'
import Titulo from '../../components/Titulo'

const PreguntasFrecuentes = () => {
  return (
    <>
    <Titulo titulo = 'Preguntas Frecuentes'></Titulo>
    <section className='py-8 px-48  max-md:px-8 bg-[#FCFCFC] min-h-[80vh] mb-10'>
           {/* <PlantillaForm></PlantillaForm>  */}
           <Acordeon></Acordeon>
    </section>
    </>
  )
}

export default PreguntasFrecuentes


