import React from 'react'
import { Button } from '../../components'
import pasturometro from '../../assets/images/01.jpg'
import vista1 from '../../assets/images/vistas.png'
import vista2 from '../../assets/images/vistas2.png'
import { RiPlantFill } from "react-icons/ri";

const ContenidoPasturometro = () => {

    const data = [
        {
          pregunta: "Mapeo de la disponibilidad de pasto",
          respuesta: `Es un dispositivo inteligente de medición de
          altura comprimida de pasto, que mediante
          lecturas electrónicas georeferenciadas y
          algoritmos integrados a una aplicación del
          teléfono móvil, estima de forma confiable y en
          tiempo real la cantidad de pasto que hay
          disponible para los animales en cada zona o
          potrero del campo. Su diseño ergonómico
          facilita la manipulación del equipo y una
          interfaz amigable simplifica la interpretación
          de los datos. El pasturómetro electrónico
          Pastech es un desarrollo local pensado para ser
          utilizado eficazmente en los sistemas ganaderos
          de nuestro país. Asimismo, es un producto que
          incorpora tecnología innovadora y puede usarse
          adecuadamente en una amplia diversidad de
          cubiertas vegetales.
          `
        }]

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
              titulo: "Diseño ergonómico",
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
              titulo: "Versatilidad de uso",
              respuesta: "Puede ser utilizado en una amplia variedad de cubiertas vegetales, adaptándose a diferentes tipos de terreno y condiciones."
              ,class: 'fa-solid fa-droplet fa-2x',
              border:'border-first-green border-[4px] border-dashed'
            }
          ];


  return (
    <>
    <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Productos</h1>
    </div>
    <h1 className={` py-4 ml-48 text-[55px] leading-[50px]  max-md:leading-8 max-md:text-[32px] font-bold text-first-green font-[Roboto] px-18`}>Pasturometro Electrónico</h1>
    <section className='flex justify-center items-start xl:padding-1  max-md:pt-[20px] max-md:flex-col max-md:w-[100%]'>
       <div className=" w-1/2  max-md:w-full flex relative flex-row  justify-center items-end rounded-[2%] p-8 ">
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={vista1} alt="Whatsapp" width = {300} height= {600}className='' />
            </a>
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={vista2} alt="Whatsapp" width = {200} height= {600} className='' />
            </a>
        </div>
        <div className='w-[40%] flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-full p-8'>
            <p className = {` py-9 font-normal text-xl `}> Es un <strong>dispositivo inteligente</strong> de medición de altura comprimida de pasto, que mediante lecturas electrónicas georeferenciadas y algoritmos integrados a una <strong>aplicación del teléfono móvil</strong>, estima de forma <strong>confiable y en tiempo real</strong> la cantidad de pasto que hay disponible para los animales en cada zona o potrero del campo.<br></br><br></br>Su diseño ergonómico facilita la manipulación del equipo y una interfaz amigable simplifica la interpretación de los datos.<br></br><br></br>El <strong>pasturómetro</strong> electrónico <strong>Pastech</strong> es un desarrollo local pensado para ser utilizado eficazmente en los sistemas ganaderos de nuestro país. Asimismo, es un producto que incorpora tecnología innovadora y puede usarse adecuadamente en una amplia diversidad de cubiertas vegetales.

          </p>
        </div>
    </section>
    <section className='flex justify-center items-center xl:padding-1  max-md:pt-[20px]'>
        {/* <div className=" w-1/2 flex relative  justify-center items-center flex-col rounded-[2%] p-32">
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={pasturometro} alt="Whatsapp" className='' />
            </a>
        </div> */}
        <ul className='px-12 flex gap-8 flex-wrap justify-center pb-16 max-md:gap-0 max-md:px-4 max-md:text-center text-center'>
            {data2.map((item, index) => (
                <li key={index} className={`max-md:p-8 flex flex-col justify-center max-md:my-8 shadow-lg w-[250px] h-[250px] max-md:w-[300px] max-md:h-[300px] text-align:center items-center ${item.border} border-[50%] px-4 py-16 transition-all duration-500 hover:bg-slate-200 rounded-[100%]`}>
                    <span style={{"color":"#C7F168"}} className="relative top-1">
                        <i class={item.class} ></i>
                    </span>
                    <h1 className='pt-4 font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-semibold md:whitespace-pre-line'>{item.titulo}</h1>
                </li>
                    ))}
            </ul>

    </section>
    </>
  )
}

export default ContenidoPasturometro