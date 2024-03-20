import React from 'react'
import { Button } from '../../components'
import logo from '../../assets/icons/icono.svg'
import TarjetaServicios from './TarjetaServicios';
import Titulo from '../../components/Titulo';

const Servicios = () => {

    const data = [
        {
          pregunta: "Mapeo de la disponibilidad de pasto",
          respuesta: "Brindamos servicio de relevamiento de la oferta de pasto a través de la recorrida de lotes individuales y/o del campo en su totalidad. Evaluación del estado de los recursos forrajeros ofreciendo información sobre disponibilidad, expectativa de rendimiento, persistencia esperada, calidad ofrecida, etc.",
            circulo: "border-first-green border-dashed"
            ,bg:" bg-first-green"
        },
        {
          pregunta: "Servicio de monitoreo integral",
          respuesta: "A partir de determinaciones con sensores remotos “Pastech dron” y/o “Pastech satelital”, llevamos a cabo el monitoreo periódico de la disponibilidad de pasto en cada sector del campo y en la totalidad del establecimiento. Aplicando modelación con uso de inteligencia artificial también pronosticamos el crecimiento de pasto esperado a corto plazo. La información se encuentra disponible on line en tiempo real a través de la plataforma web.",
          circulo: "border-first-green "
          , bg:"bg-first-green"
        },
        {
          pregunta: "Servicio de gestión de la alimentación del ganado",
          respuesta: "Planeamiento y presupuestación forrajera, uso de suplementos y plan de rotación de animales para aprovechar eficientemente los recursos disponibles en el establecimiento. Recopilación y gestión de datos para la toma de decisiones en las empresas ganaderas (ej. determinación de la superficie destinada a la cosecha del excedente de pasto, o la cantidad de suplemento a asignar para cubrir el requerimiento de los animales cuando la oferta de pasto es deficitaria).",
          circulo: "border-first-green border-dashed"
          ,bg:"bg-first-green"
        },
        {
          pregunta: "Asesoramiento en manejo de recursos forrajeros",
          respuesta: "Análisis, diagnóstico y recomendaciones para manejar eficientemente recursos forrajeros: siembra, fertilización, utilización, etc.",
          circulo: "border-first-green "
          ,bg:" bg-first-green "
        },
        {
          pregunta: "Asesoramiento en nutrición animal para sistemas agropecuarios",
          respuesta: "Definición de requerimientos, elaboración de dietas, etc.",
          circulo: "border-first-green border-dashed "
          ,bg:" bg-first-green "
        },
        {
          pregunta: "Capacitaciones",
          respuesta: "Formación de recursos humanos sobre el manejo del pasto en las empresas ganaderas. Capacitaciones para empleados rurales, asesores técnicos, empresas de servicios.",
          circulo: "border-first-green "
          ,bg:"bg-first-green"
        },
        {
          pregunta: "Medición de huella de carbono",
          respuesta: "Cuantificación del balance de carbono del establecimiento (mediante estimaciones de secuestro de carbono, huella de carbono, emisiones, etc.) para certificar la condición “carbono neutro”.",
          circulo: "border-first-green  border-dashed"
          ,bg:"bg-first-green"
        },
        {
          pregunta: "Interpretación de la información - proyección de resultados económicos",
          respuesta: "Elaboración de presupuestos forrajeros, estimaciones de margen bruto y otros indicadores económicos.",
          circulo: "border-first-green "
          ,bg:"bg-first-green"
        },
        {
          pregunta: "Investigacion aplicada",
          respuesta: "Además de los servicios brindados a la producción agropecuaria, aplicamos protocolos científicos para generar información que permita avanzar en el conocimiento. Llevamos a cabo ensayos a campo, generamos información sitio-específica, algoritmos, modelos y tecnología ganadera 4.0 sobre la cual basamos nuestras recomendaciones.",
          circulo: "border-first-green border-dashed"
          ,bg:"bg-first-green"
        },
        {
          pregunta: "Desarrollo de productos",
          respuesta: "Evaluación de resultados de nuevos productos (fertilizantes, aditivos, dietas, etc.).",
          circulo: "border-first-green "
          ,bg:""
        },
        {
          pregunta: "Conducción de ensayos a campo",
          respuesta: "Realización y seguimiento de ensayos bajo protocolo científico, en parcelas o en franjas, para evaluar procedimientos de siembra, manejos de pastoreo, etc.",
          circulo: "border-first-green border-dashed"
          ,bg:"bg-"
        },
      ];


  return (
    <>
    <Titulo titulo = 'Servicios' bg = 'bg-[#f1f4f6]'></Titulo>
    <TarjetaServicios
      data={data}
    ></TarjetaServicios>
    </>
  )
}

export default Servicios