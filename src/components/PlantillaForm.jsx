import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputError } from './InputError'
import { Input } from './Input'
import { correoValidation, nombreValidation,numeroValidation,textoValidation} from '../utils/inputValidation'
import Button from "./Button"
export const PlantillaForm = () => {
  const [error, setError] = useState(false)
  const [loginExitoso, setLoginExitoso] = useState(false)
  // const dispatch = useDispatch()
  const methods = useForm({ shouldUnregister: false })

  const onSubmit = methods.handleSubmit(async data => {
    console.log('la informacion es', data)
    setLoginExitoso(true)
  })


  return (
      <FormProvider {...methods} >
        <form onSubmit={ e => e.preventDefault()}
          noValidate
          className = "flex flex-row flex-wrap max-md:flex-col">
            <Input {...nombreValidation}/>
            <Input {...numeroValidation}/>
            <Input {...correoValidation}/>
            <Input  esTexto = {true} {...textoValidation}/>
            <Button  text = {"ENVIAR"} color = {"green"} onClick = {onSubmit}></Button>

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
