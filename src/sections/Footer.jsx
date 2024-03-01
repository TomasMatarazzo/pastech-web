import LiFooter from "./LiFooter"
import { productosLinks } from "../assets/constants/constants"

const Footer = () => {
  return (
    <section className=" w-3/5 m-auto flex relative pb-6 max-md:flex-col ">
      <LiFooter elementos={["Home","Empresa"]} titulo = "Pastech"></LiFooter>
      <LiFooter elementos={productosLinks} titulo = "Productos y Servicios" ></LiFooter>
      <LiFooter elementos={["Preguntas Frecuentes","Como comprar","Contacto"]} titulo = "Soporte"></LiFooter>
  </section>
  )
}

export default Footer