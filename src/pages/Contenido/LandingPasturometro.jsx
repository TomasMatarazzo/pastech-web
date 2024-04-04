import React from 'react'
import vista1 from '../../assets/images/ico-pastu.png'
import logo from '../../assets/images/logox.png'

const LandingPasturometro = ({imagen,texto}) => {
  return (



        <section className=' relative pt-12 flex text-center justify-evenly items-center max-md:pt-[20px] max-md:flex-col max-md:w-[100%] max-md:mb-0 mb-16 px-10 '>
          <div className=" max-md:px-0 w-[20vw]  max-md:w-full flex relative flex-row  justify-center items-start rounded-[2%] max-md:m-0 max-md:flex-col max-md:justify-center ">
            <img src={vista1} alt="Whatsapp" className='z-30 max-h-80 self-center' />         
          </div>
          <div className=' w-[50vw] max-md:mt-10 flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-full px-8 '>
            <p className = {`py-9 font-normal text-xl`}>Es un dispositivo <strong>inteligente</strong> de medición de altura comprimida de <strong>pasto</strong>, que mediante lecturas electrónicas <strong>georreferenciadas</strong> y <strong>algoritmos integrados</strong> a una aplicación del <strong>teléfono móvil</strong>, estima de forma confiable y en <strong>tiempo real</strong> la cantidad de pasto que hay disponible para los animales en cada <strong>zona</strong> o <strong>potrero</strong> del campo. <br></br><br></br>Su diseño <strong>ergonómico</strong> facilita la manipulación del equipo y una interfaz amigable de la <strong>App</strong> simplifica la interpretación de los datos para la toma de decisiones en cuanto al manejo de la pastura y los animales.<br></br> Asimismo, es un producto que incorpora tecnología de <strong>sensores</strong> que permite utilizarse adecuadamente sin necesidad de cables ni funcionamientos mecánicos más propensos al desgaste.</p>
          </div>
          <div className=" w-[20vw] max-md:px-0"></div>
          <div className=" w-[20vw] right-[-10vw] max-md:hidden absolute px-4 max-md:px-0">
                      <img src={logo} alt="Whatsapp" className='z-30 self-center' />             
          </div>
        </section>
  )
}

export default LandingPasturometro