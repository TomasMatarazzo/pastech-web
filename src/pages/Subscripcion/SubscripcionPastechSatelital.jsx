import React from 'react'
import icono from '../../assets/icons/icono.svg'
import Titulo from '../../components/Titulo'
import Carta from './Carta'
import logo from '../../assets/images/logox.png'
import { useState } from 'react'
import precios from '../../assets/constants/precios'

const SubscripcionPastechSatelital = () => {

    const [isActive , setActive] = useState(false)

    // tipo 0 = gratis, 1 = basico, 2 = avanzado, 3 = inteligente
    const [tipo, setTipo ] = useState(0)

    const arrancarCompra = (tipo) =>{
        setTipo(tipo)
        setActive(true)
    }

  return (
    <section className='mb-10'>
            <Titulo titulo = 'Suscripción Pastech Satelital' pastechSatelital={'max-md:px-16'}></Titulo>
            <div className={`flex relative  justify-center items-center flex-col rounded-[2%] max-md:text-center pb-6`}>
                <h1 className= {` inline-block max-md:px-16  pb-0 text-2xl leading-[30px] max-md:text-[20px] font-bold text-t-green font-[Roboto]`}>Mediciones automáticas y remotas de stock de pasto con satélites e inteligencia artificial</h1>
            </div>
            <div className='px-4 pt-4  flex max-md:flex-col'>
                <div className='absolute w-[100%]  max-lg:hidden ' style={{ backgroundImage: `url(${logo}})` }}>
                    <img src = {logo} className=' absolute left-[-13%] lg:[-16%] w-[400px] h-[400px]'></img>
                </div>
                <section className='flex flex-row justify-evenly items-start max-md:items-center max-md:flex-col gap-6 max-md:gap-0 ml-[250px] max-md:ml-0'>
                    <Carta goto = {`form/0`} titulo = 'Gratis'  esPotrero= {true} setTipo = {()=>{arrancarCompra(0)}} descripcion={'2'} gratis={true}  icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta goto = {`form/1`} titulo = 'Basico' esPotrero= {true}  setTipo = {()=>{arrancarCompra(1)}} descripcion={'7'} precio = {precios[1]} icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta goto = {`form/2`} titulo = 'Avanzado' esPotrero= {true}  setTipo = {()=>{arrancarCompra(2)}} descripcion={'25'} precio = {precios[2]}icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                    <Carta goto = {`form/3`} titulo = 'Inteligente' esPotrero= {true}  setTipo = {()=>{arrancarCompra(3)}} descripcion={'60'} precio = {precios[3]} icono = {icono} descripcionBoton = {'CONTRATAR'}></Carta>
                </section>
            </div>
    </section>
  )
}

export default SubscripcionPastechSatelital