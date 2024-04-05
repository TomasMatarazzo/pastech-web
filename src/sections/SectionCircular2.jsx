import PropTypes from 'prop-types'
import { Button } from '../components';


const SectionCircular2 = ({nombre,imagen,descripcion,botonColor,bg = "white",link}) => {


    const backgroudn = {
        "green": " bg-first-green",
        "white":" bg-[#60a115]"
    }

    const text1 = {
        "green":" text-black ",
        "white":" text-[#000] "
    }

    const text2 = {
        "green": " text-white ",
        "white":" text-white "
    }
  return (
    <section className="  max-md:px-0 pb-[0px] px-[100px] bg-[#f1f4f6] ">
        <section className="flex relative max-md:flex-row rounded-[2%] ">
            <div className = {`font-extralight ${backgroudn[bg]} md:pl-[150px] max-md:flex-col-reverse max-md:items-center max-md:align-middle items-center h-full w-full max-md:w-full px-10 flex flex-row py-16 max-md:py-10 bg-[#02936e] rounded-lg justify-evenly`}>
                <div className='w-[30vw]  flex flex-col justify-center items-center text-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} py-2 font-[Roboto] font-normal text-[55px] leading-[50px] max-md:text-[32px] max-md:mt max-lg:text-[45px] max-md:leading-8 `}>{nombre}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal text-xl`}>{descripcion}</p>
                    <a href = {link}><Button text = {"+ INFO"} color = {botonColor}></Button></a>
                </div>
                <div className = {`w-[26vw] rounded-full max-md:w-[330px] max-md:h-[330px] max-lg:w-[510px] max-lg:h-[510px]  bg-center bg-cover duration-500 h-[26vw] border-[6px] border-s-green border-dashed flex items-center justify-center `}>
                     <img   className = {`w-[25vw]  h-[25vw] p-8 rounded-full max-md:w-[300px] max-md:h-[300px] max-lg:w-[500px] max-lg:h-[500px]  bg-center bg-cover duration-500 border-[3px] border-s-green`}
                            src = {imagen}
                        />
                </div>
            </div>
        </section>
    </section>
  )
}

SectionCircular2.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    botonColor:PropTypes.string,
    bg:PropTypes.string,
    link:PropTypes.string,
  };

export default SectionCircular2