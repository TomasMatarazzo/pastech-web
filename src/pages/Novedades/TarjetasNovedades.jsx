import React from 'react'
// import imagen1 from '../../assets/images/noticia1.jpg'
// import imagen2 from '../../assets/images/noticia2.png'
// import imagen3 from '../../assets/images/noticia3.png'
// import imagen4 from '../../assets/images/noticia4.png'
// import imagen5 from '../../assets/images/noticia5.png'

// imagenes= [imagen1,imagen2,imagen3,imagen4,imagen5]

const TarjetasNovedades = ({data}) => {
  return (
    <div className='relative flex justify-center w-[100%] items-center px-14  bg-[#f1f4f6]  max-md:px-0 max-md:flex-col max-md:pt-[20px]'>
        <ul className='relative w-[100%] flex gap-8  flex-wrap text-left  justify-start pb-16 flex-col max-md:text-center max-md:gap-0 max-md:px-4 max-md:mb-20  max-md:items-center'>
        {data.map((item, index) => (
            <div className='flex items-center relative w-[100%] max-md:items-start max-md:justify-center max-md:h-[500px] max-md:mb-10'>
                <li key={index} className={` ${item.circulo}  border-[6px] border-t-green bg-white z-20 text-center flex flex-col items-center justify-center shadow-lg w-[25vw] h-[25vw]  max-md:w-[220px] max-md:h-[220px]  border-[50%] rounded-full transition-all duration-500 hover:bg-slate-200 text-wrap`}>
                    <img src = {item.imagen} className='clip-circle w-[25vw] h-[25vw] max-md:w-[220px] max-md:h-[220px] ' ></img>
                </li>
                <div className={`  max-md:top-[20%]  max-md:mb-[450px] max-md:w-[100%] max-md:h-[400px] max-md:px-4 max-md:pt-8  border-[2px] border-first-green shadow-2xl bg-#[f1f4f6] bg w-[90%] justify-center absolute  h-[250px] flex flex-col text-center pl-[20vw] pr-10 right-0 items-center  `}>
                    <p className='py-2 text-normal font-bold font-[Roboto] absolute right-16 top-0 max-md:text-lg max-md:text-cente max-md:right-10'>{item.fecha}</p>
                    <p className='{`py-2 text-2xl font-bold font-[Roboto] max-md:text-lg max-md:text-center'>{item.titulo}</p>
                    <p className='{` py-2 text-xl font-normal pt-8 max-md:text-lg max-md:text-center'>{item.descripcion}</p>

                </div>
            </div>
                ))}
        </ul>
</div>
  )
}

export default TarjetasNovedades