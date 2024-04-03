import React from 'react'
import Titulo from '../../components/Titulo'
import Circulo from '../../components/Circulo'
import { PlantillaFormCompra } from '../../components/PlantillaFormCompra'

const FormCompra = ({tipo}) => {

  // armalo con esto sdatos     // tipo 0 = gratis, 1 = basico, 2 = avanzado, 3 = inteligente
  let tipoSuscripcion;
  switch (tipo) {
    case 0:
      tipoSuscripcion = 'Gratis';
      break;
    case 1:
      tipoSuscripcion = 'Basico';
      break;
    case 2:
      tipoSuscripcion = 'Avanzado';
      break;
    case 3:
      tipoSuscripcion = 'Inteligente';
      break;

  }

  let precio;
  switch (tipo) {
    case 1:
      precio = 10000;
      break;
    case 2:
      precio = 20000;
      break;
    case 3:
      precio = 40000;
      break;
  }

  return (
    <div className='bg-[#e9e8e8]'>
      <Titulo titulo='Subscripción'></Titulo>

      <section className='py-8 px-48  max-md:px-8 min-h-[80vh] z-10'>
        <p className='text-lg pb-8 text-t-green z-10'>Ingrese sus datos para finalizar la compra.</p>
        <p className='text-lg pb-8 text-t-green z-10'>Tipo de suscripción: {tipo}</p>
        <p className='text-lg pb-8 text-t-green z-10'>Precio: {precio}</p>
        <Circulo color="first-green max-md:hidden" bg="bg-[#e9e8e8] " position={'left-[-6%] bottom-[40%]'}></Circulo>
        <Circulo color="first-green max-md:hidden" bg="bg-[#e9e8e8] " position={'right-[-5%] bottom-[65%]'}></Circulo>
        <PlantillaFormCompra tipoSubscripcion={tipo}></PlantillaFormCompra>
      </section>
    </div>
  )
}

export default FormCompra