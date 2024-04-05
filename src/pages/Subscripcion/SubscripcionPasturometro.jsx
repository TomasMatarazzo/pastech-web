import React from 'react'
import Titulo from '../../components/Titulo'
import logo from '../../assets/images/logox.png'
import pastu from '../../assets/images/ico-pastu2.png'
import app from '../../assets/images/celular2.png'
import monitor from '../../assets/images/monitor.jpg'
import Carta from './Carta'
import icono from '../../assets/icons/icono.svg'

const SubscripcionPasturometro = () => {
  return (
    <section className='mb-10'>
        <Titulo titulo = 'Susbscripción Pasturómetro electrónico' padding={'mt-0 pt-2'}></Titulo>
        <div className=' px-4 pt-4 pb-16 flex max-md:flex-col'>
            <div className='absolute w-[100%] max-lg:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                <img src = {logo} className=' absolute right-[-11%] w-[400px] h-[400px]'></img>
            </div>
            <section className='flex flex-row justify-center gap-6 items-start max-md:items-center w-full max-md:flex-col max-md:gap-0 max-md:ml-0'>
                <Carta titulo = 'Paso 1' descripcion={'Adquisicion de Pasturómetro electrónico'} gratis={true} icono = {pastu} pasturometro={true} noBoton = {true}></Carta>
                <Carta titulo = 'Paso 2' descripcion={'Subscripción App Movil + \nPlataforma Web'} precio = '10.000'  alta = {true} gratis={true} icono = {app} pasturometro={true} img2 = {monitor} descripcionBoton={'QUIERO QUE ME CONTACTEN'} goto='/contacto'></Carta>
                <Carta titulo = 'Paso 3' descripcion={'Asistencia Técnica\n\nPersonal de Pastech te orientará en la calibración y utilización\n\nAcceso a 2 años de datos históricos'} gratis={true}  pasturometro= {true} icono = {icono} precio = '20.000' noBoton = {true}></Carta>
            </section>
        </div>
    </section>
  )
}

export default SubscripcionPasturometro