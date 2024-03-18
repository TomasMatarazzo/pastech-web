import React from 'react'

const Carta = ({titulo,descripcion,precio,gratis}) => {
  return (
    <div className='w-[18vw] max-md:w-[90vw] max-md:my-8 max-md:h-[80vh] h-[60vh] bg-s-green rounded-md flex flex-col items-center justify-between text-center'>
        <h1 className='font-bold text-2xl text-t-green py-8'>{titulo}</h1>
        <p className='font-semibold text-lg px-4 text-t-green whitespace-pre-line'>{descripcion}</p>

        
        <div className='w-[100%] h-[30%] flex flex-col justify-end items-center'>
            <button className='px-8 py-2 my-4 bg-first-green rounded-md font-bold text-xl text-white'>CONTRATAR</button>
            { gratis ?
            <div className='bg-[#02A79C] text-xl pb-4 py-1 w-full text-white font-semibold rounded-b-md '>Valido por 2 meses</div>
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