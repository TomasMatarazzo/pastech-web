import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from './Input'
import { correoValidation, nombreValidation,numeroValidation,textoValidation} from '../utils/inputValidation'
import Button from "./Button"
import { enviarCorreo } from '../services/services'
import LoadingSpinner from './Loading'



export const PlantillaForm = () => {

  
  const [disabled, setIsDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loginExitoso, setLoginExitoso] = useState(false)
  // const dispatch = useDispatch()

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
  const methods = useForm({ shouldUnregister: false })
  const url = 'http://localhost:3000/email/emailConsulta'

  const onSubmit = methods.handleSubmit(async data => {
    setIsDisabled(true)
    setLoading(true)
    await enviarCorreo(data.nombre,data.correo,data.numero,data.mensaje)
    setLoginExitoso(true)
    setLoading(false)
    methods.resetField('nombre')
    methods.resetField('correo')
    methods.resetField('numero')
    methods.resetField('mensaje')
    setTimeout(()=>{
      setIsDisabled(false)
    },120000)
  })



  return (
      <FormProvider {...methods} >
        <form onSubmit={ e => e.preventDefault()}
          noValidate
          className = "flex flex-row flex-wrap max-md:flex-col max-md:items-center bg-[#BBE33E] p-12 max-md:p-8">
            <Input {...nombreValidation}/>
            <Input {...numeroValidation}/>
            <Input {...correoValidation}/>
            <Input  esTexto = {true} {...textoValidation}/>
            { loading && <LoadingSpinner></LoadingSpinner>}
            <Button  text = {"ENVIAR"} color = {"green"} onClick = {onSubmit} disabled={disabled || loading}></Button>

        </form>
            {loginExitoso && (
              <p className="flex items-center gap-1 text-2xl px-2 font-semibold mt-4 text-green-500 bg-green-100 mb-5">
                Email enviado con exito.
              </p>
            )}
      </FormProvider>
  )
}

// const StyledForm3 = styled.div`
//     background-color:rgb(255 255 255)
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items:center;
    
//     @media ${mobileMax}{
//         text-align:center;

//         label{
//           padding-left:0px;
//           align-self:center;
//       }
//     }

//     div{
//       width:100%;
//     }


//     button{
//       margin-top:5px;
//       margin-bottom:10px;
//       width:100%;
//       height:40px;
//       font-weight:400;
//       font-size:0.8rem;
//     }


//     input, select{
//         outline: none;
//         font-size: 0.875rem;
//         font-weight: 400;
//         border-radius 5px;
//         border-color:rgb(209 213 219);
//         border-width: 1px;
//         border-radius: 0.375rem;
//         padding: 0 15px;
//         height: 41px;
//         margin: 8px 0;
//         width: 100%;
//     }

//     label{
//         font-size: 0.875rem;
//         font-weight: 500;
//         color: #2e2e2e;
//         align-self:baseline;
//     }


//     h1 , h2{
//         font-weight:500;
//         margin:  10px 10px 10px 10px;
//     }
