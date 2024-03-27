import React from 'react'


const Carta = ({titulo,descripcion,precio,gratis,icono, pasturometro,alta, descripcionBoton,noBoton}) => {


  let imagen = pasturometro ? ' w-[7vw] max-md:w-[100px] self-center':'w-[7vw] max-md:w-[120px] self-center'

  imagen = alta ? ' w-[8vw] max-md:w-[75px] self-center': imagen



  return (
    <div className='w-[18vw] max-md:w-[80vw] max-md:my-8 max-md:mx-18 max-md:h-[60vh] h-[70vh] bg-s-green rounded-md flex flex-col items-center justify-between text-center'>
        <div className=''> 
          <h1 className='font-bold text-3xl text-t-green py-2'>{titulo}</h1>
          <p className='font-semibold text-lg px-4 text-t-green whitespace-pre-line'>{descripcion}</p>
        </div>
        <div className='w-[100%] h-[30%] flex flex-col justify-end items-center'>
            <img 
                    src = {icono}
                    alt = "Logo"
                    width = {260}
                    height={90}
                    className= {imagen}
              ></img>
            {noBoton ? "":<button className='px-8 py-2 my-4 w-[220px] bg-first-green rounded-md font-bold text-xl text-white cursor-pointer hover:bg-t-green z-20'>{descripcionBoton}</button>}
            { gratis ?
                  <div className='flex pb-4 '>
                      <p className='pb-1 pr-3 invisible'>ARS</p>
                      <p className='text-3xl font-bold py-0 leading-6 self-end invisible'>{precio}</p>
                      <p className='text-xl self-end invisible'> /mes</p>
                  </div>
                        :
            <div className='flex pb-4 '>
                <p className='pb-1 pr-3'>ARS</p>
                <p className='text-3xl font-bold py-0 leading-6 self-end'>{precio}</p>
                <p className='text-xl self-end'> /mes</p>
            </div>
            
            }
        </div>

    </div>
  )
}

export default Carta