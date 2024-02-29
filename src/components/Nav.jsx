import {hamburger} from '../assets/icons'
import icono from "../assets/icons/icono2.svg"

const Nav = () => {
  return (
    <header className = "fixed padding-x spx-1 py-4 z-10 w-full bg-white">
        <nav className = "flex justify-between items-center max-container">
            <a href = '/'>
                <img 
                src = {icono}
                alt = "Logo"
                width = {260}
                height={90}
                className='max-md:h-[60px] max-md:w-[120px]'
                ></img>
            </a>
            <ul className=' flex-1 flex justify-end items-center gap-6 max-lg:hidden'>
                <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]'>Home</li>
                 <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]' >Volcan</li>
                 <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]'   >Donde comprar</li>
                 <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]' >Asistencia</li>
                 <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]' >Contactos </li>
                 <li className = 'font-montserrat leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]' >Preguntas frecuentes</li>

            </ul>
            <div className = " max-lg:block hidden">
                <img src ={hamburger}
                    alt = "Hamburguer"
                    width={25}
                    height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav