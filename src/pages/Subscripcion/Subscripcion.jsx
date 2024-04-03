import React from 'react'
import Titulo from '../../components/Titulo'
import Carta from './Carta'
import logo from '../../assets/images/logox.png'
import icono from '../../assets/icons/icono.svg'
import pastu from '../../assets/images/ico-pastu2.png'
import app from '../../assets/images/celular2.png'
import monitor from '../../assets/images/monitor.jpg'
import FormCompra from './FormCompra'
import { useState } from 'react'



const Subscripcion = () => {



    const [isActive , setActive] = useState(false)

    // tipo 0 = gratis, 1 = basico, 2 = avanzado, 3 = inteligente
    const [tipo, setTipo ] = useState(2)

    const arrancarCompra = (tipo) =>{
        setTipo(tipo)
        setActive(true)
    }
    
    return (

       
    <section>
         {isActive ? <FormCompra tipo = {tipo}></FormCompra> :
         <section>
            <section>
                <Titulo titulo = 'Pastech Satelital'></Titulo>
                <div className='px-4 pt-4  flex max-md:flex-col'>
                    <div className='absolute w-[100%]  max-lg:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                        <img src = {logo} className=' absolute left-[-13%] w-[400px] h-[400px]'></img>
                    </div>
                    <section className='flex flex-row justify-evenly items-center max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                        <Carta titulo = 'Gratis' setTipo = {()=>{arrancarCompra(0)}} descripcion={'Suministro de datos de disponibilidad forrajera\n\nHasta 2 potreros'} gratis={true}  icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                        <Carta titulo = 'Basico' setTipo = {()=>{arrancarCompra(1)}} descripcion={'Suministro de datos de disponibilidad forrajera\n\nHasta 7 potreros\n\nAtención por Email'} precio = '10.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                        <Carta titulo = 'Avanzado' setTipo = {()=>{arrancarCompra(2)}} descripcion={'Suministro de datos de disponibilidad forrajera\n\nHasta 30 potreros\n\nAtención por email y WhatsApp\nAcceso a 2 años de datos históricos'} precio = '20.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                        <Carta titulo = 'Inteligente' setTipo = {()=>{arrancarCompra(3)}} descripcion={'Suministro de datos de disponibilidad forrajera\n\nHasta 50 potreros\n Atención por email y WhatsApp\nAcceso a 2 años de datos historicos\nPredicción Artificial\nNotificaciones por Email'} precio ='100.000' icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    </section>
                </div>
            </section>
            <div className=" max-md:hidden m-auto mt-10 flex max-md:min-w-[300px] max-md:min-h-[0.5rem] z-6 bg-green-600 leading-5 border-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[50%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
                <section>
                <Titulo titulo = 'Pasturómetro electrónico' padding={'mt-0 pt-2'}></Titulo>
                <div className=' px-4 pt-4 pb-16 flex max-md:flex-col'>
                    <div className='absolute w-[100%] max-lg:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                        <img src = {logo} className=' absolute right-[-13%] w-[400px] h-[400px]'></img>
                    </div>
                    <section className='flex flex-row justify-center gap-6 items-center w-full max-md:flex-col max-md:gap-0 max-md:ml-0'>
                        <Carta titulo = 'Paso 1' descripcion={'Adquisicion de Pasturómetro electrónico'} gratis={true} alta={true} icono = {pastu} pasturometro={true} noBoton = {true}></Carta>
                        <Carta titulo = 'Paso 2' descripcion={'Subscripción App Movil + \nPlataforma Web'} precio = '10.000'  alta = {true} gratis={true} icono = {app} pasturometro={true} img2 = {monitor} descripcionBoton={'QUIERO QUE ME CONTACTEN'} goto='/contacto'></Carta>
                        <Carta titulo = 'Paso 3' descripcion={'Asistencia Técnica\n\nPersonal de Pastech te orientará en la calibración y utilización\n\nAcceso a 2 años de datos históricos'} gratis={true}  pasturometro= {true} icono = {icono} precio = '20.000' noBoton = {true}></Carta>
                    </section>
                </div>
            </section>
        </section>
        }
    </section>
        
  )
}

export default Subscripcion