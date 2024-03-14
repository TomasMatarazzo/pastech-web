import React from 'react'
import { Button } from '../../components'
import pasturometro from '../../assets/images/01.jpg'
import vista1 from '../../assets/images/vistas.png'
import vista2 from '../../assets/images/vistas2.png'
const ContenidoPasturometro = () => {

    const data = [
        {
          pregunta: "Mapeo de la disponibilidad de pasto",
          respuesta: `Es un dispositivo inteligente de medición de altura comprimida de pasto, que mediante
          lecturas electrónicas georeferenciadas y algoritmos integrados a una aplicación del
          teléfono móvil, estima de forma confiable y en tiempo real la cantidad de pasto que hay
          disponible para los animales en cada zona opotrero del campo. 
          `
        }]

    const data2 = [
            {
              titulo: "Medición de altura comprimida de pasto",
              respuesta: "Utiliza lecturas electrónicas georeferenciadas para calcular la altura del pasto de manera precisa. Proporciona estimaciones en tiempo real de la cantidad de pasto disponible en cada zona o potrero del campo."
            },
            {
              titulo: "Aplicación móvil integrada",
              respuesta: "Algoritmos avanzados integrados en una aplicación móvil para facilitar la recopilación y visualización de datos. Permite la interpretación rápida y sencilla de los datos recopilados por el dispositivo."
            },
            {
              titulo: "Diseño ergonómico",
              respuesta: "Diseñado para ser fácilmente manipulado en el campo, facilitando su uso durante las operaciones ganaderas."
            },
            {
              titulo: "Desarrollo local",
              respuesta: "Producto diseñado y desarrollado localmente para adaptarse a las necesidades específicas de los sistemas ganaderos en nuestro país."
            },
            {
              titulo: "Incorporación de tecnología innovadora",
              respuesta: "Incorpora tecnología avanzada para ofrecer mediciones precisas y confiables de la altura del pasto."
            },
            {
              titulo: "Versatilidad de uso",
              respuesta: "Puede ser utilizado en una amplia variedad de cubiertas vegetales, adaptándose a diferentes tipos de terreno y condiciones."
            }
          ];


  return (
    <>
    <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Productos</h1>
    </div>

    <section className='flex justify-center items-start xl:padding-1  max-md:pt-[20px]'>
        <div className='w-[40%] flex flex-col justify-start max-md:items-center max-md:text-center max-md:w-[300px] p-8'>
            <h1 className={` py-4  text-[55px] leading-[50px] max-md:text-[32px] font-bold text-first-green font-[Roboto]`}>Pasturometro Electronico</h1>
            <h1 className={` font-semibold  leading-8 text-3xl py-2  max-md:text-[32px] text-gray-500m font-[Roboto]`}></h1>
            <p className = {` py-4 font-semibold text-2xl `}>Descripcion del producto</p>
            <p className = {` py-9 font-normal text-xl `}>          Su diseño ergonómico
          facilita la manipulación del equipo y una
          interfaz amigable simplifica la interpretación
          de los datos. 
          </p>
        </div>
        <div className=" w-1/2 flex relative flex-row  justify-center items-end rounded-[2%] p-8">
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={vista1} alt="Whatsapp" width = {300} height= {600}className='' />
            </a>
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={vista2} alt="Whatsapp" width = {200} height= {600} className='' />
            </a>
        </div>
    </section>
    <section className='flex justify-center items-center xl:padding-1  max-md:pt-[20px]'>
        {/* <div className=" w-1/2 flex relative  justify-center items-center flex-col rounded-[2%] p-32">
            <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                            <img src={pasturometro} alt="Whatsapp" className='' />
            </a>
        </div> */}
        <ul className='px-12 flex gap-8 flex-wrap text-left justify-center pb-16'>
            {data2.map((item, index) => (
                <li key={index} className='shadow-lg w-[30%] border-gray-300 border-[1px] border-[50%] px-4 py-16 rounded-md transition-all duration-500 hover:bg-slate-200'>
                    <h1 className='pt-4 font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-normal md:whitespace-pre-line'>{item.titulo}</h1>
                    <p className='pt-4 font-normal text-md font-[Roboto] max-md:text-[20px] max-md:font-normal md:whitespace-pre-line text-[#626262]'>{item.respuesta}</p>
                </li>
                    ))}
            </ul>

    </section>
    </>
  )
}

export default ContenidoPasturometro