import PropTypes from 'prop-types'
import { useState } from 'react'
import logo from '../../assets/icons/icono.svg'


const Acordeon = () => {
  const data =[
    {
      "pregunta": "¿Qué beneficios aporta la utilización de Pastech en mi establecimiento ganadero?",
      "respuesta": "La medición certera de la cantidad de pasto disponible en el campo, permite su utilización eficiente. Conocer cuánto pasto hay disponible hace que se pueda pastorear oportunamente, aprovechando al máximo el pasto producido y con su mayor calidad para la alimentación de los animales."
    },
    {
      "pregunta": "¿Cómo puedo realizar un relevamiento de la disponibilidad de pasto en mi campo?",
      "respuesta": "Pastech ofrece diversas herramientas para brindar un relevamiento preciso de la oferta de pasto de un establecimiento. La opción adecuada dependerá de las características particulares de cada establecimiento (accesibilidad, tamaño, superficie en pastoreo, diversidad de recursos en pastoreo, disponibilidad de mano de obra, etc.)."
    },
    {
      "pregunta": "¿Es necesario una capacitación para realizar un relevamiento forrajero con el pasturómetro electrónico Pastech?",
      "respuesta": "El pasturómetro electrónico Pastech ha sido diseñado para ser usado por un operario con mínimas instrucciones básicas. No se requiere formación específica. Es un dispositivo de manipulación intuitiva, con comandos simples y diseño ergonómico. Con una operación simple se vincula a la aplicación de celular donde se puede gestionar (visualizar, guardar, compartir, etc.) la información de cada relevamiento realizado."
    },
    {
      "pregunta": "¿Cuál es la utilidad de conocer y pronosticar la disponibilidad de pasto?",
      "respuesta": "Tener información de la tasa de crecimiento del pasto en el corto plazo ofrece la posibilidad de cubrir satisfactoriamente los requerimientos alimenticios del ganado y ajustar el uso de suplementos y/o la carga animal para minimizar el costo de una alimentación adecuada para los animales."
    },
    {
      "pregunta": "¿Con qué frecuencia es conveniente realizar el monitoreo forrajero?",
      "respuesta": "La cuantificación periódica de la disponibilidad de pasto contribuye a generar información específica para cada lote (según particularidades de especies forrajeras, tipo de suelo, clima y manejo). Un monitoreo semanal o cada quince días aporta datos valiosos para alimentar los modelos de simulación que brindan una solución confiable para cada situación productiva."
    },
    {
      "pregunta": "¿Qué es un modelo de simulación de crecimiento del pasto?",
      "respuesta": "Es una representación matemática del proceso de crecimiento de las plantas, en el que se simula su evolución a lo largo del tiempo. Estos modelos se basan en datos históricos y parámetros que describen el comportamiento de las plantas ante los factores ambientales y de manejo, y permiten proyectar cómo podría evolucionar en el futuro."
    }
  ]

  const [isActive, setActive] = useState(-1)

  //   setActive(0)

  return (
    <div>
        {data.map((element, index) => {
          return (
            <ElementoAcordeon
                key = {index}
                isActive = {isActive === index}
                element = {element}
                setActive = {setActive}
                index = {index}
            ></ElementoAcordeon>
          )
        }
        )}
    </div>
  )
}

const ElementoAcordeon = ({ element, isActive, setActive, index }) => {
  const cambiarPregunta = () => {
    const nextIndex = isActive ? null : index
    setActive(nextIndex)
  }

  return (
    <div className='text-lg max-md:w-[100%]  border border-b-first-green border-t-0 border-l-0 border-r-0 '>
        <div className = "title mt-8 p-4 flex justify-between text-2xl  " onClick = {cambiarPregunta}>
            <div className='flex'>
            {/* <a href = "https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target = "_blank"> 
                            <img src ={logo}
                                alt = "Whatsapp"
                                width={60}
                                height={60}/>
                </a> */}
              <h3 className='pl-4 text-t-green  font-semibold font-[Roboto] max-md:text-center'>{element.pregunta}</h3>
            </div>
            <div className='signo text-2xl font-semibold'>{isActive ? '-' : '+'}</div>
        </div>
        { isActive && <div className='p-20 descripcion text-xl font-medium font-[Source Sans 3] max-md:text-center max-md:p-8'><h4>{element.respuesta}</h4></div>}
    </div>)
}
ElementoAcordeon.propTypes = {
  element: PropTypes.object,
  isActive: PropTypes.bool,
  setActive: PropTypes.func,
  index: PropTypes.number
}

export default Acordeon
