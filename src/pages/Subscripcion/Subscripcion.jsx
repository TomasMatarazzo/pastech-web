import React from 'react'
import Titulo from '../../components/Titulo'
import Carta from './Carta'
import logo from '../../assets/images/logox.png'
import icono from '../../assets/icons/icono.svg'
import pastu from '../../assets/images/ico-pastu.png'
import app from '../../assets/images/celular.png'
import monitor from '../../assets/images/monitor.jpg'

const Subscripcion = () => {
  return (
    <>
    <section>
        <Titulo titulo = 'Pastech Satelital'></Titulo>
        <div className='px-4 pb-16 flex max-md:flex-col'>
            <div className='absolute w-[100%] h-[100%] max-md:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                <img src = {logo} className=' absolute left-[-13%] w-[400px] h-[400px]'></img>
            </div>
            <section className='flex flex-row justify-evenly items-center max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                <Carta titulo = 'Gratis' descripcion={'Hasta 2 potreros'} gratis={true}  icono = {icono}></Carta>
                <Carta titulo = 'Basico' descripcion={'Hasta 7 potreros\nAtención por Email'} precio = '10.000' icono = {icono}></Carta>
                <Carta titulo = 'Avanzado' descripcion={'Hasta 30 potreros\nAtencion por email y WhatsApp\nAcceso a 2 años de datos historicos'} precio = '20.000' icono = {icono}></Carta>
                <Carta titulo = 'Inteligente' descripcion={'Hasta 50 potreros\n Atencion por email y WhatsApp\nAcceso a 2 años de datos historicos\nPrediccion Artificial\nNotificaciones por Email'} precio ='100.000' icono = {icono}></Carta>
            </section>
        </div>
    </section>
        <section>
        <Titulo titulo = 'Pasturometro Electrónico'></Titulo>
        <div className='px-4 pb-16 flex max-md:flex-col'>
            <div className='absolute w-[100%] h-[100%] max-md:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                <img src = {logo} className=' absolute left-[-13%] w-[400px] h-[400px]'></img>
            </div>
            <section className='flex flex-row justify-evenly items-center max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                <Carta titulo = 'Paso 1' descripcion={'\n\n\nAdquisicion de Pasturometro Electronico'} gratis={true} icono = {pastu} pasturometro={true} ></Carta>
                <Carta titulo = 'Paso 2' descripcion={'\n\n\nSubscripcion App Movil + \nPlataforma Web'} precio = '10.000' icono = {app} pasturometro={true} img2 = {monitor}></Carta>
                <Carta titulo = 'Paso 3' descripcion={'Asistencia Tecnica\n\nPersonal de Pastech te orientará en la calibracion y utilizacion\n\nAcceso a 2 años de datos historicos'} pasturometro= {true} icono = {icono} precio = '20.000'></Carta>
            </section>
        </div>
    </section>
    </>
  )
}

export default Subscripcion