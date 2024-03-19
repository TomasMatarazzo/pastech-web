import React from 'react'
import Titulo from '../../components/Titulo'
import Carta from './Carta'
import logo from '../../assets/images/logox.png'

const Subscripcion = () => {
  return (
    <section>
        <Titulo titulo = 'Pastech Satelital'></Titulo>
        <div className='px-4 pb-16 flex max-md:flex-col'>
            <div className='absolute w-[100%] h-[100%] max-md:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                <img src = {logo} className=' absolute left-[-13%] w-[400px] h-[400px]'></img>
            </div>
            <section className='flex flex-row justify-evenly items-center max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                <Carta titulo = 'Gratis' descripcion={'Hasta 2 potreros'} gratis={true} ></Carta>
                <Carta titulo = 'Basico' descripcion={'Hasta 7 potreros\nAtención por Email'} precio = '10.000'></Carta>
                <Carta titulo = 'Avanzado' descripcion={'Hasta 30 potreros\nAtencion por email y WhatsApp\nAcceso a 2 años de datos historicos'} precio = '20.000'></Carta>
                <Carta titulo = 'Inteligente' descripcion={'Hasta 50 potreros\n Atencion por email y WhatsApp\nAcceso a 2 años de datos historicos\nPrediccion Artificial\nNotificaciones por Email'} precio ='100.000'></Carta>
            </section>
        </div>
    </section>
  )
}

export default Subscripcion