import React from 'react'
import { PlantillaForm } from '../components/PlantillaForm'
import Titulo from '../components/Titulo'
import Circulo from '../components/Circulo'

const Contacto = () => {


  return (
    <div className='bg-[#e9e8e8]'>
      <Titulo titulo = 'Contacto' ></Titulo>
      <section className='py-8 px-48  max-md:px-8 min-h-[80vh] z-10'>
            <p className='text-lg pb-8 text-t-green z-10'>Selecciona el motivo de tu consulta y te estaremos contestando a la brevedad.</p>
            <Circulo color = "first-green max-md:hidden" bg = "bg-[#e9e8e8] " position={'left-[-6%] bottom-[40%]'}></Circulo>
            <Circulo color = "first-green max-md:hidden" bg = "bg-[#e9e8e8] " position={'right-[-5%] bottom-[65%]'}></Circulo>
            <PlantillaForm></PlantillaForm> 
      </section>
    </div>
  )
}

export default Contacto