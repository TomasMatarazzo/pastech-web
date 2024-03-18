import React from 'react'
import IntegranteEmpresa from '../../sections/IntegranteEmpresa'
import IntegranteEmpresa2 from '../../sections/IntegranteEmpresa2'
import { empresa } from '../../assets/constants/constants'
import image1 from '../../assets/images/circuloFer.png'
import image2 from '../../assets/images/circuloAle.png'
import image3 from '../../assets/images/circuloJuan.png'
import TextoEmpresa from '../../sections/TextoEmpresa'
import MisionVision from './MisionVision'


const Empresa
 = () => {  
  return (
    <div>
      <section className="xl:padding-1 pt-16 max-md:pt-[80px]">
        <TextoEmpresa></TextoEmpresa>
      </section>
      <section>
        <MisionVision
          tituloMision={'Misión'}
          tituloVision = {'Visión'}
          descripcionMision={`Desarrollamos innovación tecnológica basada en conocimiento científico, para el manejo sustentable de cubiertas vegetales en sistemas de producción agropecuaria.
          Mejoramos la gestión del pasto en ecosistemas
          naturales o cultivados – localmente o fuera del
          país - para desarrollar su productividad,
          modernizar el trabajo rural y minimizar el
          impacto ambiental.`}
          descripcionVision={`Ser referentes científico-tecnológico para el
            manejo sostenible de ecosistemas terrestres.
            Líderes en innovación tecnológica para brindar
            información de calidad orientada a mejorar la
            producción alimentos amigable con el medio
            ambiente, los animales y la sociedad.`}></MisionVision>
        <IntegranteEmpresa nombre = {empresa[0].nombre}
                  descripcion={empresa[0].descripcion}
                  imagen={image1}
                  titulo = {empresa[0].titulo}
                  boton = {empresa[0].boton}
                  bg = "grey"
                  last = {true}
        ></IntegranteEmpresa>
      </section>
      <section>
        <IntegranteEmpresa2 nombre = {empresa[1].nombre}
                  descripcion={empresa[1].descripcion}
                  imagen={image2}
                  boton = {empresa[1].boton}
                  titulo = {empresa[1].titulo}
                  bg = "green"
        ></IntegranteEmpresa2>
      </section>
      <section>
        <IntegranteEmpresa nombre = {empresa[2].nombre}
                  descripcion={empresa[2].descripcion}
                  imagen={image3}
                  boton = {empresa[2].boton}
                  titulo = {empresa[2].titulo}
                  bg = "grey"
                  last = {false}
        ></IntegranteEmpresa>
      </section>
    </div>
  )
}

export default Empresa
