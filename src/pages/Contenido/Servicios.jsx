import React from 'react'
import { Button } from '../../components'
import logo from '../../assets/icons/icono.svg'

const Servicios = () => {

    const data = [
        {
          pregunta: "Mapeo de la disponibilidad de pasto",
          respuesta: "Brindamos servicio de relevamiento de la oferta de pasto a través de la recorrida de lotes individuales y/o del campo en su totalidad. Evaluación del estado de los recursos forrajeros ofreciendo información sobre disponibilidad, expectativa de rendimiento, persistencia esperada, calidad ofrecida, etc.",
        },
        {
          pregunta: "Servicio de monitoreo integral",
          respuesta: "A partir de determinaciones con sensores remotos “Pastech dron” y/o “Pastech satelital”, llevamos a cabo el monitoreo periódico de la disponibilidad de pasto en cada sector del campo y en la totalidad del establecimiento. Aplicando modelación con uso de inteligencia artificial también pronosticamos el crecimiento de pasto esperado a corto plazo. La información se encuentra disponible on line en tiempo real a través de la plataforma web.",
        },
        {
          pregunta: "Servicio de gestión de la alimentación del ganado",
          respuesta: "Planeamiento y presupuestación forrajera, uso de suplementos y plan de rotación de animales para aprovechar eficientemente los recursos disponibles en el establecimiento. Recopilación y gestión de datos para la toma de decisiones en las empresas ganaderas (ej. determinación de la superficie destinada a la cosecha del excedente de pasto, o la cantidad de suplemento a asignar para cubrir el requerimiento de los animales cuando la oferta de pasto es deficitaria).",
        },
        {
          pregunta: "Asesoramiento en manejo de recursos forrajeros",
          respuesta: "Análisis, diagnóstico y recomendaciones para manejar eficientemente recursos forrajeros: siembra, fertilización, utilización, etc.",
        },
        {
          pregunta: "Asesoramiento en nutrición animal para sistemas agropecuarios",
          respuesta: "Definición de requerimientos, elaboración de dietas, etc.",
        },
        {
          pregunta: "Capacitaciones",
          respuesta: "Formación de recursos humanos sobre el manejo del pasto en las empresas ganaderas. Capacitaciones para empleados rurales, asesores técnicos, empresas de servicios.",
        },
        {
          pregunta: "Medición de huella de carbono",
          respuesta: "Cuantificación del balance de carbono del establecimiento (mediante estimaciones de secuestro de carbono, huella de carbono, emisiones, etc.) para certificar la condición “carbono neutro”.",
        },
        {
          pregunta: "Interpretación de la información - proyección de resultados económicos",
          respuesta: "Elaboración de presupuestos forrajeros, estimaciones de margen bruto y otros indicadores económicos.",
        },
        {
          pregunta: "Investigacion aplicada",
          respuesta: "Además de los servicios brindados a la producción agropecuaria, aplicamos protocolos científicos para generar información que permita avanzar en el conocimiento. Llevamos a cabo ensayos a campo, generamos información sitio-específica, algoritmos, modelos y tecnología ganadera 4.0 sobre la cual basamos nuestras recomendaciones.",
        },
        {
          pregunta: "Desarrollo de productos",
          respuesta: "Evaluación de resultados de nuevos productos (fertilizantes, aditivos, dietas, etc.).",
        },
        {
          pregunta: "Conducción de ensayos a campo",
          respuesta: "Realización y seguimiento de ensayos bajo protocolo científico, en parcelas o en franjas, para evaluar procedimientos de siembra, manejos de pastoreo, etc.",
        },
      ];


  return (
    <>
    <div className='bg-[#F7F7F7] font-[Roboto] mt-[92px] py-8 px-48 max-md:px-8 text-3xl font-bold text-first-green border-b-2 border-first-green'>
        <h1>Servicios</h1>
    </div>
    <section className='flex justify-center items-center xl:padding-1  max-md:pt-[20px] max-md:text-center'>
        <div className="flex relative  justify-center items-center flex-col rounded-[2%] p-16">
            <h1 className= {` py-2  text-[55px] leading-[50px] max-md:text-[32px] font-bold text-first-green font-[Roboto]`}>Servicios</h1>
            <h2 className={` font-semibold  leading-8 text-3xl py-2  max-md:text-[32px] text-gray-500m font-[Roboto]`}> Transforma tu negocio con nuestros servicios</h2>
            <Button text = {"CONTACTANOS"} color = {"green"}></Button>
        </div>
        <div></div>
    </section>
        <div className='flexjustify-center items-center xl:padding-1  max-md:pt-[20px]'>
            <ul className='px-12 flex gap-8 max-md:gap-0 max-md:px-4 flex-wrap text-left max-md:text-center  justify-center pb-16'>
            {data.map((item, index) => (
                <li key={index} className='shadow-lg w-[30%] max-md:w-[100%] max-md:p-8 max-md:my-8 border-first-green border-[1px] border-[50%] px-4 py-16 rounded-md transition-all duration-500 hover:bg-slate-200'>
                    <a href="https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target="_blank">
                        <img src={logo} alt="Whatsapp" width={100} height={100} className='' />
                    </a>
                    <h1 className='pt-4 font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-normal md:whitespace-pre-line'>{item.pregunta}</h1>
                    <p className='pt-4 font-normal text-md font-[Roboto] max-md:text-[20px] max-md:font-normal md:whitespace-pre-line text-[#626262]'>{item.respuesta}</p>
                </li>
                    ))}



            </ul>
        
        </div>
    </>
  )
}

export default Servicios