import React from 'react'
import { Nav } from '../components'
import { productos } from '../assets/constants/constants'
import image1 from '../assets/images/01_.jpg'
import image2 from '../assets/images/02_.jpg'
import image3 from '../assets/images/03.jpg'
import image4 from '../assets/images/04_.jpg'
import { Landing,SectionCircular,SectionCircular2 } from '../sections'



const Mainpage = () => {
  return (
    <main className="relative py-0">
    <Nav></Nav>
    <section className="xl:padding-1 max-md:pt-[90px]">
      <Landing></Landing>
      {/* <Button></Button> */}
    </section>
    <section className=' max-md:pt-[60px]'>
      <SectionCircular nombre = {productos[0].nombre}
                descripcion={productos[0].descripcion}
                imagen={image1}
                boton = {productos[0].boton}
                bg = "grey"
                link = '/pasturometro'
                botonColor={'green'}
      ></SectionCircular>
    </section>
    <section className='max-md:pb-[60px] bg-[#f1f4f6]'>
      <SectionCircular2 nombre = {productos[1].nombre}
                descripcion={productos[1].descripcion}
                imagen={image2}
                boton = {productos[1].boton}
                bg = "green"
                botonColor={"white"}
                link = '/pastech-satelital'
      ></SectionCircular2>
    </section>
    <SectionCircular
      nombre = {productos[2].nombre}
      descripcion={productos[2].descripcion}
      imagen={image3}
      botonColor={'green'}
      bg = "grey"
      link = '/pastech-dron'
    ></SectionCircular>
    <section className=" pb-[60px] bg-[#f1f4f6]">
      <SectionCircular2 nombre = {productos[3].nombre}
                  descripcion={productos[3].descripcion}
                  imagen={image4}
                  boton = {productos[3].boton}
                  bg = "white"
                  botonColor={'white'}
                  link ='/servicios'
      ></SectionCircular2>
    </section>
  </main>
  )
}

export default Mainpage