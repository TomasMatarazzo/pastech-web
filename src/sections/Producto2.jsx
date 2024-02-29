import PropTypes from 'prop-types'
import { Button } from '../components';


const Producto2 = ({nombre,imagen,descripcion,boton,bg = "white"}) => {


    const backgroudn = {
        "grey": " bg-[#979f9e] ",
        "white":" bg-[#ffffff] "
    }

    const text1 = {
        "grey":" text-white ",
        "white":" text-[#000] "
    }

    const text2 = {
        "grey": " text-white ",
        "white":" text-[#626262] "
    }
  return (
    <section className="  max-md:px-0 py-[60px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-row ">
            <div className = {`font-extralight ${backgroudn[bg]} h-full w-full max-md:w-full px-10 flex flex-row py-16 max-md:py-10 bg-[#02936e]`}>
                <div>
                <h1 className={`${text1[bg]} py-2 text-4xl max-md:text-[32px]  leading-8 `}>{nombre}</h1>
                <p className = {` ${text2[bg]} py-9 font-normal`}>{descripcion}</p>
                <Button text = {boton} color = {bg === "grey"?"white":"green"}></Button>
                </div>
                <img 
                    className = "w-1/3 max-md:w-full bg-center bg-cover duration-500 h-auto"
                        src = {imagen}
                        width = {1000}
                        height = {674}
                    />
            </div>
        </section>
    </section>
  )
}

Producto2.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    boton:PropTypes.string,
    bg:PropTypes.string,
  };

export default Producto2