import React from 'react'
import TarjetasNovedades from './TarjetasNovedades';
import Titulo from '../../components/Titulo';
import { data } from '../../assets/constants/novedades.js'
// import imagen1 from '../../assets/images/noticia1.jpg'
// import imagen2 from '../../assets/images/noticia2.jpeg'
// import imagen3 from '../../assets/images/noticia3-.jpg'
// import imagen4 from '../../assets/images/noticia4-.jpeg'
// import imagen5 from '../../assets/images/noticia5.jpg'

const Novedades = () => {



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