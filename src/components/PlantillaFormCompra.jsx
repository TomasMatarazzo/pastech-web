import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputError } from './InputError'
import { Input } from './Input'
import { correoValidation, nombreValidation,numeroValidation,textoValidation} from '../utils/inputValidation'
import Button from "./Button"
import emailjs from '@emailjs/browser';
import axios from 'axios'
import {enviarCorreoCompraGratuita, generarLink} from '../services/services'  
import LoadingSpinner from './Loading'



export const PlantillaFormCompra = ({tipoSubscripcion}) => {


  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginExitoso, setLoginExitoso] = useState(false)
  const [disabled, setIsDisabled] = useState(false)

  // const dispatch = useDispatch()
  const methods = useForm({ shouldUnregister: false })

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const onSubmit = methods.handleSubmit(async data => {
    setLoading(true)
    setIsDisabled(true)

    try{ 
        if (tipoSubscripcion === 0){
          const link = await enviarCorreoCompraGratuita(data.nombre,data.correo,data.numero,tipoSubscripcion)
          setLoginExitoso(true)
          setLoading(false)
          await wait(2000)
          routeChange('https://pastech.com.ar/confirmacion');
        }
        else{
          const link = await generarLink(data.correo,data.nombre,data.numero,tipoSubscripcion)
          setLoading(false)
          setLoginExitoso(true)
          routeChange(link);
        }
    }
    catch (error) {
      console.error(error);
      setError(true)
      setLoading(false)
    }
    finally {
      setTimeout(() => {
        setIsDisabled(false);
      }, 120000); // 120000ms = 2 minutos
    }
  })

  const routeChange = (link) =>{ 
    window.location.href = link;
  }

  return (
      <FormProvider {...methods} >
        <form onSubmit={ e => e.preventDefault()}
          noValidate
          className = " flex flex-row flex-wrap max-md:flex-col h-[30%] bg-[#BBE33E] p-12 max-md:p-8">
            <Input {...nombreValidation}/>
            <Input {...numeroValidation}/>
            <Input {...correoValidation}/>
            {loading && (
              <LoadingSpinner></LoadingSpinner>
            )}
            <Button  text = {"ADQUIRIR SUSCRIPCIÓN"} color = {"green"} onClick = {onSubmit} disabled = {disabled || loading}></Button>
        </form>
            {loginExitoso && (
              <p className="flex items-center gap-1 text-2xl px-2 font-semibold mt-4 text-green-500 bg-green-100 mb-5">
                Generación de pago exitosa.
              </p>
            )}
            {!error && (
              <p className="text-2xl px-2 font-semibold mt-4 text-red-500 bg-red-100 mb-5">
                Error al generar el registro.<br ></br> Para ingresar a Pastech Satelital ingrese al siguiente link: <a href='https://pastech2.com.ar' className=' text-gray-600 italic' >www.pastech2.com.ar</a> o comuníquese por WhatsApp a 2235270021
              </p>
            )}
      </FormProvider>
  )
}