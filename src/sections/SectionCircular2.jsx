import PropTypes from 'prop-types'
import { Button } from '../components';


const SectionCircular2 = ({nombre,imagen,descripcion,botonColor,bg = "white",link}) => {


    const backgroudn = {
        "green": " bg-first-green",
        "white":" bg-first-green"
    }

    const text1 = {
        "green":" text-black ",
        "white":" text-[#000] "
    }

    const text2 = {
        "green": " text-[#626262] ",
        "white":" text-[#626262] "
    }
  return (
    <section className="  max-md:px-0 pb-[0px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-row rounded-[2%] ">
            <div className = {`font-extralight ${backgroudn[bg]} md:pl-[150px] max-md:flex-col-reverse max-md:items-center max-md:align-middle items-center h-full w-full max-md:w-full px-10 flex flex-row py-16 max-md:py-10 bg-[#02936e] rounded-lg justify-evenly`}>
                <div className='w-[30vw]  flex flex-col justify-center items-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} py-2 font-[Roboto] font-normal text-[55px] leading-[50px] max-md:text-[32px] max-lg:text-[45px] max-md:leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal text-xl`}>{descripcion}</p>
                    <a href = {link}><Button text = {"+ INFO"} color = {botonColor}></Button></a>
                </div>
                <img 
                    className = "w-[25vw] clip-circle max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 h-[25vw] border-t-green"
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
    link:PropTypes.string,
  };

export default SectionCircular2