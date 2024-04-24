import PropTypes from 'prop-types'
import { Button } from '../components';


const IntegranteEmpresa2 = ({nombre,imagen,descripcion,titulo,bg = "white"}) => {


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
    <section className="flex flex-col justify-center max-md:px-0 px-[100px] bg-[#f1f4f6]">
        <section className="flex relative max-md:flex-col rounded-[2%] ">
            <div className = {`flex font-extralight h-full w-full max-md:flex-col-reverse max-md:items-center max-md:align-middle flex flex-row py-12 max-md:py-10 rounded-lg justify-evenly`}>
                <div className='w-1/3  flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} py-2 font-bold  leading-10 text-[40px] max-md:text-[32px] font-[Roboto] `}>{nombre}</h1>
                    <h2 className={`${text1[bg]} py-2 font-semibold  leading-8 text-3xl text-gray-400 max-md:text-[32px] font-[Roboto] `}>{titulo}</h2>
                    <p className = {` ${text2[bg]} py-9 font-normal`}>{descripcion}</p>
                </div>
                <img 
                    className = {`w-[475px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 h-[475px] rounded-[50%]`}
                        src = {imagen}
                        width = {1000}
                        height = {674}
                    />
            </div>
        </section>
    </section>
  )
}

IntegranteEmpresa2.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    titulo:PropTypes.string,
    bg:PropTypes.string,
  };

export default IntegranteEmpresa2