import React, { useState } from 'react'
import Button from './Button';
import hamburger from '../assets/icons/hamburger.svg'
import icono from '../assets/icons/icono2.svg'
import { Link } from 'react-router-dom';
import wpp from '../assets/images/wpp2.svg'

const Nav = () => {
    let Links =[
      {name:"Inicio",link:"/"},
      {name:"Productos",link:"/"},
      {name:"Servicios",link:"/"},
      {name:"Como comprar",link:"/"},
      {name:"Empresa",link:"/empresa"},
      {name:"Preguntas Frecuentes",link:"/preguntas"},
      {name:"Contacto",link:"/contacto"},
    ];
    let [open,setOpen]=useState(false);


  return (
    <div className='w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <Link to = '/' className='block  w-[120px] md:w-[260px]'>
                <img 
                src = {icono}
                alt = "Logo"z
                width = {260}
                height={90}
                className='max-lg:h-[60px] max-lg:w-[120px]'
                ></img>
            </Link>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
                <div className = " max-lg:block hidden">
                            <img src ={hamburger}
                                alt = "Hamburguer"
                                width={25}
                                height={25}/>
                        </div>
            </div>
      <ul className={`md:flex gap-8 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-[5.5rem] ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='font-montserrat py-2 md:py-0 leading-normal text-[16px] text-slate-gray cursor-pointer hover:text-[#02936e]'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav