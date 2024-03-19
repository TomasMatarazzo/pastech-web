import PropTypes from 'prop-types'
import { Button } from '../components';


const SectionCircular = ({nombre,imagen,link,descripcion,botonColor,bg = "white"}) => {


    const backgroudn = {
        "grey": " bg-s-green",
        "white":" bg-[#cbcbcb]"
    }

    const text1 = {
        "grey":" text-black ",
        "white":" text-[#000] "
    }

    const text2 = {
        "grey": " text-[#626262] ",
        "white":" text-[#626262] "
    }

    const button = {
        "grey": " border-t-green ",
        "white":" border-t-green "
    }
  return (
    <section className="  max-md:px-0 py-[60px] max-md:pt-0 max-md:pb-[60px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative justify-evenly max-md:flex-col rounded-[2%] ">
            <div className = {`font-extralight ${backgroudn[bg]}  h-full w-full max-md:flex-col max-md:items-center max-md:align-middle px-10 flex flex-row py-16 bg-[#02936e] rounded-lg justify-evenly`}>
                <div className = {`w-[26vw] rounded-full max-md:w-[330px] max-md:h-[330px] max-lg:w-[510px] max-lg:h-[510px] bg-center bg-cover duration-500 h-[26vw] border-[6px] border-t-green border-dashed flex items-center justify-center `}>
                     <img   className = {`w-[25vw] rounded-full max-md:w-[300px] max-md:h-[300px] max-lg:w-[500px] max-lg:h-[500px]   bg-center bg-cover duration-500 h-[25vw] border-[3px] ${button[bg]}`}
                            src = {imagen}
                        />
                </div>
                <div className='w-[50%] flex flex-col justify-center items-center max-md:items-center max-md:text-center max-md:w-[300px] max-md:pt-2'>
                    <h1 className={`${text1[bg]} font-normal py-2 text-[55px] leading-[60px] max-md:text-[32px] max-lg:text-[45px] font-[Roboto] max-md:leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal text-xl`}>{descripcion}</p>
                    <a href={link} ><Button text = {"+ INFO"} color = {botonColor}></Button></a>
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
    link:PropTypes.string,
  };

export default SectionCircular