import PropTypes from 'prop-types'
import { Button } from '../components';


const SectionCircular = ({nombre,imagen,descripcion,boton,bg = "white"}) => {


    const backgroudn = {
        "grey": " bg-[#ffffff]",
        "white":" bg-[#ffffff]"
    }

    const text1 = {
        "grey":" text-black ",
        "white":" text-[#000] "
    }

    const text2 = {
        "grey": " text-black ",
        "white":" text-[#626262] "
    }

    const button = {
        "grey": " border-t-green ",
        "white":" border-s-green "
    }
  return (
    <section className="  max-md:px-0 py-[60px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-row rounded-[2%] ">
            <div className = {`font-extralight ${backgroudn[bg]} h-full w-full max-md:w-full max-md:flex-col max-md:items-center max-md:align-middle px-10 flex flex-row py-16 max-md:py-10 bg-[#02936e] rounded-lg justify-evenly`}>
                <img 
                    className = {`w-[475px] max-md:w-[300px] max-md:h-[300px] bg-center bg-cover duration-500 h-[475px] rounded-[50%] border-[6px] ${button[bg]}`}
                        src = {imagen}
                        width = {1000}
                        height = {674}
                    />
                <div className='w-1/3 flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} py-2 text-4xl max-md:text-[32px]  leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal`}>{descripcion}</p>
                    <Button text = {boton} color = {bg === "green"?"white":"green"}></Button>
                </div>

            </div>
        </section>
    </section>
  )
}

SectionCircular.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    boton:PropTypes.string,
    bg:PropTypes.string,
  };

export default SectionCircular