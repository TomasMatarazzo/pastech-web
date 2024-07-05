import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormCompra from './FormCompra'




const Carta = ({titulo,descripcion,precio,gratis,icono, pasturometro,alta, descripcionBoton,noBoton,goto = "#", setTipo, esPotrero = false}) => {


  let imagen = pasturometro ? ' w-[35%] max-md:w-[100px] self-center':'w-[35%] max-md:w-[120px] self-center'

  imagen = alta ? ' w-[30%] max-md:w-[75px] self-center': imagen

  

  return (
    <div className='relative w-[18vw] max-md:w-[80vw] max-md:my-8 max-md:mx-18 min-h-[70vh] max-md:min-h-[67vh] bg-s-green rounded-md flex flex-col items-center justify-between text-center'>
        <>
        <div className=''> 
          <h1 className='h-[20%] font-bold text-2xl text-t-green py-2'>{titulo}</h1>
          { esPotrero ?
          <div className='mt-14'>
            <p className='h-[50%]  font-semibold text-[54px] leading-10 px-4 whitespace-pre-line text-black'>{descripcion}</p>
            <p className='h-[50%] font-semibold text-[32px] px-4 leading-10 whitespace-pre-line text-black'>potreros</p>
          </div>
          :
          <p className='h-[50%] font-semibold text-base px-4 leading-[27px] whitespace-pre-line text-black'>{descripcion.toUpperCase()}</p>
          }
          </div>
        <div className='w-[100%] h-[30%] flex flex-col justify-end items-center'>
            <img 
                    src = {icono}
                    alt = "Logo"
                    width = {260}
                    height={90}
                    className= {imagen}
              ></img>
            { esPotrero ?
                (noBoton ? "" :
                  <a href={goto}>
                    <button onClick={setTipo} className='px-8 py-2 mt-4 w-[220px] bg-first-green rounded-md font-bold text-xl text-white cursor-pointer hover:bg-t-green z-20'>
                      {descripcionBoton}
                    </button>
                  </a>
                )
              : ""
            }
              {gratis ?
                  <div className='flex pb-4 mt-4 '>
                      <p className='pb-1 pr-3 invisible text-xl'>USD</p>
                      <p className=' text-[30px] font-bold py-0 invisible font-[Lato]'>${precio}</p>
                      <p className='text-[30px] self-end invisible'> /mes</p>
                  </div>
                        :
            <div className='flex pb-4 mt-4'>
                <p className='pb-1 pr-3 text-xl'>USD</p>
                <p className='text-[30px] font-bold py-0  font-[Lato]'>${precio}</p>
                <p className='text-[30px] self-end'> /mes</p>
            </div>
            }
            {esPotrero? "" :(noBoton ? "" :
                  <a href={goto}>
                    <button onClick={setTipo} className='px-8 py-2 mb-8 w-[220px] bg-first-green rounded-md font-bold text-xl text-white cursor-pointer hover:bg-t-green z-20'>
                      {descripcionBoton}
                    </button>
                  </a>
                )}
        </div>
        </>
    </div>
  )
}

export default Carta