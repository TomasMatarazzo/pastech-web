import { Button } from "../components";
import PropTypes from 'prop-types'

const Producto = ({nombre, descripcion,imagen,boton,botonColor,bg}) => {

  const colores = {
    "green" : " bg-[#02936e] ",
    "white" : " bg-[#ffffff] "
  }

  const colorTexto = {
    "green" : "text-[#ffffff]",
    "white" : "text-[#626262]"
  }

  return (
    <section className="flex relative w-full max-md:flex-col">
      <div 
      className = " w-2/3 max-md:w-full  bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${imagen})` }}>  
      </div>
      <div className = {`font-extralight  h-full w-1/ max-md:w-full px-10 flex flex-col py-16 max-md:py-10 ${colores[bg]}}>`}>
        <h1 className={` ${colorTexto[bg]} py-2 text-4xl max-md:text-[32px] leading-8`}>{nombre}</h1>
        <p className = {` ${colorTexto[bg]} py-9 font-normal`}>{descripcion}</p>
        <Button text = {boton} color = {botonColor}></Button>
      </div>
  </section>
  )
}

Producto.propTypes = {
  nombre:PropTypes.string,
  descripcion:PropTypes.string,
  imagen:PropTypes.string,
  boton:PropTypes.string,
  bg:PropTypes.string,
  textColor:PropTypes.boton
};


export default Producto