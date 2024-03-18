
import React from 'react'

const data2 = [
    {
      titulo: "Medición de altura comprimida de pasto",
      respuesta: "Utiliza lecturas electrónicas georeferenciadas para calcular la altura del pasto de manera precisa. Proporciona estimaciones en tiempo real de la cantidad de pasto disponible en cada zona o potrero del campo.",
      class: 'fa-solid fa-plant-wilt fa-2x',
      border:'border-first-green border-[4px] border-dashed'
    },
    {
      titulo: "Aplicación móvil integrada",
      respuesta: "Algoritmos avanzados integrados en una aplicación móvil para facilitar la recopilación y visualización de datos. Permite la interpretación rápida y sencilla de los datos recopilados por el dispositivo."
      ,class: 'fa-solid fa-mobile fa-2x',
      border:'border-s-green border-[4px]'
    },
    {
      titulo: "Diseño",
      titulo2:"ergonómico",
      respuesta: "Diseñado para ser fácilmente manipulado en el campo, facilitando su uso durante las operaciones ganaderas."
      ,class: 'fa-solid fa-check fa-2x',
      border:'border-black border-[4px] border-dashed'
    },
    {
      titulo: "Inteligencia Artificial",
      respuesta: "Incorpora tecnología avanzada para ofrecer mediciones precisas y confiables de la altura del pasto."
      ,class: 'fa-solid fa-server fa-2x',
      border:'border-t-green border-[4px]'
    },
    {
      titulo: "Versatilidad",
      titulo2:"de uso",
      respuesta: "Puede ser utilizado en una amplia variedad de cubiertas vegetales, adaptándose a diferentes tipos de terreno y condiciones."
      ,class: 'fa-solid fa-droplet fa-2x',
      border:'border-first-green border-[4px] border-dashed'
    }
  ];


const CirculosPasturometro = () => {
  return (
    <section className='w-full flex justify-center items-center xl:padding-1  max-md:pt-[20px] mt-16 max-md:mt-0'>
    {/* <div className=" w-1/2 flex relative  justify-center items-center flex-col rounded-[2%] p-32">
        <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                        <img src={pasturometro} alt="Whatsapp" className='' />
        </a>
    </div> */}
    <ul className='px-12 flex gap-8 flex-wrap justify-center pb-16 max-md:gap-0 max-md:px-4 max-md:text-center text-center'>
        {data2.map((item, index) => (
            <li key={index} className={`max-md:p-8 flex flex-col justify-center max-md:my-8 shadow-lg w-[15vw] h-[15vw] max-md:w-[300px] max-md:h-[300px] text-align:center items-center ${item.border} border-[50%] px-4 py-16 transition-all duration-500 hover:bg-[#02A79C] rounded-[100%]`}>
                {/* <span style={{"color":"#C7F168"}} className="relative top-1">
                    <i class={item.class} ></i>
                </span> */}
                <h1 className='pt-4 font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-semibold md:whitespace-pre-line'>{item.titulo}</h1>
                <h1 className=' font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-semibold'>{item.titulo2}</h1>
            </li>
                ))}
        </ul>

</section>
  )
}

export default CirculosPasturometro