import PropTypes from 'prop-types'
import { Button } from '../components';


const SectionCircular2 = ({nombre,imagen,descripcion,boton,bg = "white"}) => {


    const backgroudn = {
        "green": " bg-t-green",
        "white":" bg-s-green"
    }

    const text1 = {
        "green":" text-white ",
        "white":" text-[#000] "
    }

    const text2 = {
        "green": " text-white ",
        "white":" text-[#626262] "
    }
  return (
    <section className="  max-md:px-0 pb-[0px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-row rounded-[2%]">
            <div className = {`font-extralight ${backgroudn[bg]} max-md:flex-col-reverse max-md:items-center max-md:align-middle items-center h-full w-full max-md:w-full px-10 flex flex-row py-16 max-md:py-10 bg-[#02936e] rounded-lg justify-evenly`}>
                <div className='w-1/3  flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} py-2 text-4xl max-md:text-[32px]  leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal`}>{descripcion}</p>
                    <Button text = {boton} color = {bg === "grey"?"white":"green"}></Button>
                </div>
                <img 
                    className = "w-[475px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 h-[475px] rounded-[50%] border-8 border-dashed border-t-green"
                        src = {imagen}
                        width = {1420}
                        height = {1420}
                    />
            </div>
        </section>
    </section>
  )
}

SectionCircular2.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    boton:PropTypes.string,
    bg:PropTypes.string,
  };

export default SectionCircular2