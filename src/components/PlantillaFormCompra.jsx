import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputError } from './InputError'
import { Input } from './Input'
import { correoValidation, nombreValidation,numeroValidation,textoValidation} from '../utils/inputValidation'
import Button from "./Button"
import emailjs from '@emailjs/browser';
import axios from 'axios'
import {generarLink} from '../services/services'  



export const PlantillaFormCompra = ({tipoSubscripcion}) => {


  const [error, setError] = useState(false)
  const [loginExitoso, setLoginExitoso] = useState(false)
  // const dispatch = useDispatch()
  const methods = useForm({ shouldUnregister: false })

  const onSubmit = methods.handleSubmit(async data => {
    try{ 
      console.log(data)
      const link = await generarLink(data.correo,data.nombre,data.numero,tipoSubscripcion)
      setLoginExitoso(true)
      routeChange(link);
    }
    catch (error) {
      console.error(error);
      setError(true)
    }
  })

  const routeChange = (link) =>{ 
    window.location.href = link;
  }

  return (
      <FormProvider {...methods} >
        <form onSubmit={ e => e.preventDefault()}
          noValidate
          className = "flex flex-row flex-wrap max-md:flex-col h-[30%] bg-[#BBE33E] p-12 max-md:p-8">
            <Input {...nombreValidation}/>
            <Input {...numeroValidation}/>
            <Input {...correoValidation}/>
            <Button  text = {"ADQUIRIR SUSCRIPCION"} color = {"green"} onClick = {onSubmit}></Button>
        </form>
            {loginExitoso && (
              <p className="flex items-center gap-1 text-2xl px-2 font-semibold mt-4 text-green-500 bg-green-100 mb-5">
                Generación de pago exitosa.
              </p>
            )}
            {error && (
              <p className="flex items-center gap-1 text-2xl px-2 font-semibold mt-4 text-red-500 bg-red-100 mb-5">
                Error en la generacion del Pago. Contactarse por Correo o WhatsApp.
              </p>
            )}
      </FormProvider>
  )
}