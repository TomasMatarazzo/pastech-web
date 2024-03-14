import LiFooter from "./LiFooter"
import { productosLinks,linksFooter } from "../assets/constants/constants"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className=" w-3/5 m-auto flex relative pb-6 max-md:flex-col max-md:items-center">
      <ul className=" flex flex-col justify-start items-start w-1/3 max-md:w-[90%] max-md:items-center">
        <h1 className="text-white text-2xl font-normal py-3">Pastech</h1>
        <Link to = '/'>
            <li key = {1} className="py-0 my-2 text-lg font-thin text-[rgb(135,147,145)] hover:text-white hover:border-white cursor-pointer border-b-2 border-transparent">Inicio</li>
        </Link>
        <Link to = '/empresa'>
            <li key = {2} className="py-0 my-2 text-lg font-thin text-[rgb(135,147,145)] hover:text-white hover:border-white cursor-pointer border-b-2 border-transparent">Empresa</li>
        </Link>       

      </ul>
      <LiFooter elementos={productosLinks} titulo = {"Productos y Servicios"} ></LiFooter>
      <LiFooter elementos={linksFooter} titulo = "Soporte"></LiFooter>
  </section>
  )
}

export default Footer