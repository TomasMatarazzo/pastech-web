import React from 'react'
import { PlantillaForm } from '../components/PlantillaForm'

const Contacto = () => {
  return (
    <>
    <div className='bg-[#F7F7F7] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Contacto</h1>
    </div>
    <section className='py-8 px-48  max-md:px-8 bg-[#FCFCFC] min-h-[80vh]'>
           <p className='text-lg pb-8 text-t-green'>Selecciona el motivo de tu consulta y te estaremos contestando a la brevedad.</p>
           <PlantillaForm></PlantillaForm> 
    </section>
    </>
  )
}

export default Contacto