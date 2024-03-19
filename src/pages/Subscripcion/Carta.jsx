import React from 'react'
import icono from '../../assets/icons/icono.svg'

const Carta = ({titulo,descripcion,precio,gratis}) => {
  return (
    <div className='w-[18vw] max-md:w-[80vw] max-md:my-8 max-md:mx-18 max-md:h-[50vh] h-[60vh] bg-s-green rounded-md flex flex-col items-center justify-between text-center'>
        <div>
          <h1 className='font-bold text-3xl text-t-green py-8'>{titulo}</h1>
          <p className='font-semibold text-lg px-4 text-t-green whitespace-pre-line'>{descripcion}</p>
        </div>
        <div className='w-[100%] h-[30%] flex flex-col justify-end items-center'>
        <img 
                src = {icono}
                alt = "Logo"
                width = {260}
                height={90}
                className=' max-lg:w-[200px] w-[150px] max-md:w-[100px] self-center'
          ></img>
            <button className='px-8 py-2 my-4 bg-first-green rounded-md font-bold text-xl text-white cursor-pointer hover:bg-t-green z-20'>CONTRATAR</button>
            { gratis ?
                  <div className='flex pb-8 '>
                      <p className='pb-1 pr-3 invisible'>ARS</p>
                      <p className='text-3xl font-bold py-0 leading-6 self-end invisible'>{precio}</p>
                      <p className='text-xl self-end invisible'> /mes</p>
                  </div>
                        :
            <div className='flex pb-8 '>
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