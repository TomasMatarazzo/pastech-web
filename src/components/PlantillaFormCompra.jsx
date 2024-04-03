import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputError } from './InputError'
import { Input } from './Input'
import { correoValidation, nombreValidation,numeroValidation,textoValidation} from '../utils/inputValidation'
import Button from "./Button"
import emailjs from '@emailjs/browser';
import axios from 'axios'



export const PlantillaFormCompra = ({tipoSubscripcion}) => {


  const [error, setError] = useState(false)
  const [loginExitoso, setLoginExitoso] = useState(false)
  // const dispatch = useDispatch()
  const methods = useForm({ shouldUnregister: false })

  const onSubmit = methods.handleSubmit(async data => {
    console.log('la informacion es', data)
    generarLink(50)
  })

  const routeChange = (link) =>{ 
    window.location.href = link;
  }

  async function generarLink(id = 50) {
    try {
      // agrega ademas del id el tipo de subscripcion
      const tipoSubscripcion = 'premium';
      const response = await fetch(`http://localhost:8080/generarLink?id=${id}&tipo=${tipoSubscripcion}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const link = await response.json();
      console.log(link);
      routeChange(link);
    } catch (error) {
      console.error(error);
    }
  }

  async function enviarCorreo( nombre , correo ,numero, message) {

    const data = {
      service_id: 'service_39x51y6',
      template_id: 'template_iuo1n9j',
      user_id: '9z5_7ynQhzUc4dwYL',
      template_params: {
          'to_name':nombre,
          'reply_to': correo,
          'numero':numero,
          'message':message,
      }
    };

      try {
          await axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(data), {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          alert('¡Tu correo ha sido enviado!');
      } catch (error) {
          alert('¡Vaya! ' + JSON.stringify(error));
      }
  }


  return (
      <FormProvider {...methods} >
        <form onSubmit={ e => e.preventDefault()}
          noValidate
          className = "flex flex-row flex-wrap max-md:flex-col bg-[#BBE33E] p-12">
            <Input {...nombreValidation}/>
            <Input {...numeroValidation}/>
            <Input {...correoValidation}/>
            <Button  text = {"ADQUIRIR SUSCRIPCION"} color = {"green"} onClick = {onSubmit}></Button>
        </form>
            {loginExitoso && (
              <p className="flex items-center gap-1 text-2xl px-2 font-semibold mt-4 text-green-500 bg-green-100 mb-5">
                Email enviado con exito.
              </p>
            )}
      </FormProvider>
  )
}