import React from 'react'
import icono from '../../assets/icons/icono.svg'
import Titulo from '../../components/Titulo'
import Carta from './Carta'
import logo from '../../assets/images/logox.png'
import { useState } from 'react'

const SubscripcionPastechSatelital = () => {

    const [isActive , setActive] = useState(false)

    // tipo 0 = gratis, 1 = basico, 2 = avanzado, 3 = inteligente
    const [tipo, setTipo ] = useState(2)

    const arrancarCompra = (tipo) =>{
        setTipo(tipo)
        setActive(true)
    }

  return (
    <section className='mb-10'>
            <Titulo titulo = 'Susbscripción Pastech Satelital'></Titulo>
            <div className={`flex relative  justify-center items-center flex-col rounded-[2%] max-md:text-center pb-6`}>
                <h1 className= {` inline-block  pb-0 text-2xl leading-[30px] max-md:text-[20px] font-bold text-t-green font-[Roboto]`}>Mediciones automáticas y remotas de stock de pasto con satélites e inteligencia artificial</h1>
            </div>
            <div className='px-4 pt-4  flex max-md:flex-col'>
                <div className='absolute w-[100%]  max-lg:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                    <img src = {logo} className=' absolute left-[-13%] w-[400px] h-[400px]'></img>
                </div>
                <section className='flex flex-row justify-evenly items-start max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                    <Carta titulo = 'Gratis' setTipo = {()=>{arrancarCompra(0)}} descripcion={'- Suministro de datos de disponibilidad forrajera\n- Hasta 2 potreros'} gratis={true}  icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta titulo = 'Basico' setTipo = {()=>{arrancarCompra(1)}} descripcion={'- Suministro de datos de disponibilidad forrajera\n- Hasta 7 potreros\n- Atención por Email'} precio = '10.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta titulo = 'Avanzado' setTipo = {()=>{arrancarCompra(2)}} descripcion={'- Suministro de datos de disponibilidad forrajera\n- Hasta 30 potreros\n- Atención por email y WhatsApp\n- Acceso a 2 años de datos históricos'} precio = '20.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta titulo = 'Inteligente' setTipo = {()=>{arrancarCompra(3)}} descripcion={'- Suministro de datos de disponibilidad forrajera\n- Hasta 50 potreros\n- Atención por email y WhatsApp\n- Acceso a 2 años de datos historicos\n- Predicción Artificial\n- Notificaciones por Email'} precio ='100.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                </section>
            </div>
    </section>
  )
}

export default SubscripcionPastechSatelital