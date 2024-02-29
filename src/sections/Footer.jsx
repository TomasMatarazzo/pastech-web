import LiFooter from "./LiFooter"
import { productosLinks } from "../assets/constants/constants"

const Footer = () => {
  return (
    <section className=" w-3/5 m-auto flex relative pb-6 max-md:flex-col ">
      <LiFooter elementos={["Home","Preguntas Frecuentes","Recetario","Volcan"]} titulo = "Volcan"></LiFooter>
      <LiFooter elementos={productosLinks} titulo = "Productos" ></LiFooter>
      <LiFooter elementos={["hola","como","andas"]} titulo = "Soporte"></LiFooter>
  </section>
  )
}

export default Footer