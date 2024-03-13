import React from 'react'
import Acordeon from './Acordeon'

const PreguntasFrecuentes = () => {
  return (
    <>
    <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Preguntas Frecuentes</h1>
    </div>
    <section className='py-8 px-48  max-md:px-8 bg-[#FCFCFC] min-h-[80vh]'>
           {/* <PlantillaForm></PlantillaForm>  */}
           <Acordeon></Acordeon>
    </section>
    </>
  )
}

export default PreguntasFrecuentes


