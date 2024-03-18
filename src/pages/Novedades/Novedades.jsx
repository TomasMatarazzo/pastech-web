import React from 'react'
import TarjetasNovedades from './TarjetasNovedades';
import Titulo from '../../components/Titulo';
import imagen1 from '../../assets/images/noticia1.jpg'
import imagen2 from '../../assets/images/noticia2.jpeg'
import imagen3 from '../../assets/images/noticia3-.jpg'
import imagen4 from '../../assets/images/noticia4-.jpeg'
import imagen5 from '../../assets/images/noticia5.jpg'

const Novedades = () => {

  const data = [
    {
      fecha: "Marzo 2024",
      titulo: "19 startups se sumaron a la red de la Bolsa de Comercio de Rosario",
      descripcion: "Esta iniciativa continúa fortaleciendo el ecosistema de innovación, ofreciendo soluciones tecnológicas avanzadas y sostenibles para enfrentar los desafíos de la cadena agroindustrial. Pastech estuvo presente."
    ,imagen: imagen1
    },
    {
      fecha: "Septiembre 2023",
      titulo: "Premio Intecmar",
      descripcion: "Pastech fue premiado en el premio Intecmar organizado en Mar del Plata."
      ,imagen: imagen2
    },
    {
      fecha: "Agosto 2023",
      titulo: "Desarrollo de pasturometro electrónico",
      descripcion: "El equipo de informática estuvo realizando pruebas de mediciones en el campo."
      ,imagen: imagen3
    },
    {
      fecha: "Marzo 2023",
      titulo: "Subsecretaria de Desarrollo Emprendedor. Secretaria de Industria y Desarrollo Productivo",
      descripcion: "Pastech formó parte de la reunión con Pablo Gutiérrez, Subsecretario de Desarrollo Emprendedor, a efectos de mostrar y dar a conocer el proyecto del pasturometro electrónico."
      ,imagen: imagen4
    },
    {
      fecha: "Marzo 2023",
      titulo: "Programa de aceleración exclusivo para mujeres emprendedoras",
      descripcion: "Pastech forma parte de la red de mujeres emprendedoras."
     , imagen: imagen5
    }
  ]


  return (
    <>
    <Titulo titulo = {'Novedades'} bg = 'bg-[#f1f4f6]'></Titulo>
    <TarjetasNovedades
      data={data}
    ></TarjetasNovedades>
    </>
  )
}

export default Novedades