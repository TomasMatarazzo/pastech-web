import React from 'react'
import { Nav } from '../components'
import { productos } from '../assets/constants/constants'
import image1 from '../assets/images/icono-pasturometro2.png'
import image2 from '../assets/images/satelitee.png'
import image3 from '../assets/images/icono-dron2.png'
import i1 from '../assets/images/i1.png'
import i2 from '../assets/images/i2.png'
import i3 from '../assets/images/i3.png'
import i4 from '../assets/images/i4.png'
import i5 from '../assets/images/i5.png'
import i6 from '../assets/images/i6.png'
import {Landing,SectionCircular,SectionCircular2} from '../sections'


let data = [
  { titulo: 'Menor costo de adquisición del producto', imagen: i1 },
  { titulo: 'Incremento en la precisión de las mediciones', imagen: i2 },
  { titulo: 'Menor tiempo en mediciones', imagen: i3 },
  { titulo: 'Información para la toma de decisiones en tu celular', imagen: i4 },
  { titulo: 'Sustentabilidad', imagen: i5 },
  { titulo: 'Predicción del crecimiento de tu pasto', imagen: i6 }
];

const Mainpage = () => {
  return (
    <main className="relative py-0">
    <Nav></Nav>
    <section className="xl:padding-1 max-md:pt-[90px] ">
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
    {/* <section className=" pb-[60px] bg-[#f1f4f6]">
      <SectionCircular2 nombre = {productos[3].nombre}
                  descripcion={productos[3].descripcion}
                  imagen={image4}
                  boton = {productos[3].boton}
                  bg = "white"
                  botonColor={'white'}
                  link ='/servicios'
      ></SectionCircular2>
    </section> */}
        <div className='w-[100%] flex flex-col justify-center items-center max-md:items-center text-center max-md:w-[300px]'>
            <h1 className={` py-2 pt-8  text-[55px] leading-[50px] max-md:text-[32px] font-bold font-[Roboto]`}><span className = 'text-t-green'>¿Por qué la <span className='text-first-green'>medición</span> genera beneficios ?</span></h1>

        </div>
    <section className='w-full flex justify-center items-center xl:padding-1  max-md:pt-[20px] mt-16 max-md:mt-0'>
      <ul className='px-12 flex gap-8 flex-wrap justify-center items-start pb-16 mt-4 max-md:gap-0 max-md:px-4 max-md:text-center text-center'>
          {data.map((item, index) => (

              <li key={index} className={`  relative max-md:p-8 flex flex-col justify-start max-md:my-8 w-[13vw] h-[20vw] max-md:w-[300px] max-md:h-[350px] text-align:center items-center  ease-in-out transition-all duration-100 hover:border-[#02A79C] hover:border-[5px]`}>
                  <div className=" max-md:px-0 w-[90%] h-[23vh] max-md:w-full flex relative flex-row  justify-center items-start rounded-[2%] max-md:m-0 max-md:flex-col max-md:justify-center ">
                        <img src={item.imagen} alt="Whatsapp" className='z-30 self-center' />            
                  </div>
                  <h1 className='pt-4 font-medium text-2xl font-[Roboto] max-md:text-[20px] max-md:font-semibold md:whitespace-pre-line'>{item.titulo}</h1>
              </li>
                  ))}
      </ul>
  </section>
  </main>
  )
}

export default Mainpage