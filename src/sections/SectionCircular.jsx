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
    <section className="  max-md:px-0 py-[60px] max-md:pt-0 max-md:pb-[60px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-col rounded-[2%] ">
            <div className = {`font-extralight ${backgroudn[bg]}  h-full w-full max-md:flex-col max-md:items-center max-md:align-middle px-10 flex flex-row py-16 bg-[#02936e] rounded-lg justify-evenly`}>
                <img 
                    className = {`w-[700px] clip-circle max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 h-[475px] rounded-[50%] ${button[bg]}`}
                        src = {imagen}
                        width = {1000}
                        height = {674}
                    />
                <div className='w-[40%] flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} font-normal py-2 text-[60px] leading-[60px] max-md:text-[32px] font-[Roboto]  leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal text-xl`}>{descripcion}</p>
                    <Button text = {"+ INFO"} color = {bg === "green"?"white":"green"}></Button>
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