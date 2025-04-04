import React, { useState } from 'react'
import Button from './Button';
import hamburger from '../assets/icons/hamburger.svg'
import icono from '../assets/images/logoz.jpg'
import { Link } from 'react-router-dom';

const Nav = () => {
    let Links =[
      {name:"Inicio",link:"/"},
      {name:"Empresa",link:"/empresa"},
      {name:"Pasturómetro electrónico",link:"/pasturometro"},
      {name:"Pastech Satelital",link:"/pastech-satelital"},
      {name:"Pastech Dron",link:"/pastech-dron"},

      // {name:"Servicios",link:"/servicios"},
      {name:"Contacto",link:"/contacto"},
    ];
    let [open,setOpen]=useState(false);


  return (
    <div className='w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center max-wide:text-sm justify-between bg-white py-4 md:px-10 px-7'>
            <Link to = '/' className='block'>
                <img 
                src = {icono}
                alt = "Logo"
                width = {260}
                height={90}
                className=' max-lg:w-[200px] w-[250px] pl-8'
                ></img>
            </Link>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
                <div className = " max-lg:block hidden ">
                            <img src ={hamburger}
                                alt = "Hamburguer"
                                width={25}
                                height={25}/>
                        </div>
            </div>
      <ul className={`md:flex gap-6 max-wide:gap-4 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 max-md:pt-6 transition-all duration-200 ease-in ${open ? 'top-[4.5rem] ':'top-[-490px]'}`}>
        {
          
          Links.map((link)=>(
            <li key={link.name} className={`font-montserrat max-md:pt-2  leading-normal text-bas cursor-pointer py-0 text-slate-gray hover:text-first-green`}>
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