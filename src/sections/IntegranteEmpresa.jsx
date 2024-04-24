import PropTypes from 'prop-types'
import { Button } from '../components';


const IntegranteEmpresa = ({nombre,imagen,descripcion,titulo,bg = "white",last}) => {


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
    <section className="  max-md:px-0 py-[1px] px-[100px] bg-[#f1f4f6] flex flex-col justify-center">
        <section className="flex relative max-md:flex-col rounded-[2%]">
            <div className = {`font-extralight  h-full w-full max-md:flex-col max-md:items-center max-md:align-middle flex flex-row py-12 max-md:py-10 rounded-lg justify-evenly`}>
                <img 
                    className = {`w-[475px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500 h-[475px] rounded-[50%]`}
                        src = {imagen}
                        width = {1000}
                        height = {674}
                    />
                <div className='w-1/3 flex flex-col justify-center max-md:items-center max-md:text-center max-md:w-[300px]'>
                    <h1 className={`${text1[bg]} font-bold  leading-10 text-[40px] py-2  max-md:text-[32px] font-[Roboto] `}>{nombre}</h1>
                    <h1 className={`${text1[bg]} font-semibold  leading-8 text-3xl py-2  max-md:text-[32px] text-gray-400 font-[Roboto]`}>{titulo}</h1>
                    <p className = {` ${text2[bg]} py-9 font-normal`}>{descripcion}</p>
                </div>

            </div>
        </section>
        <div className="max-md:hidden z-6 bg-green-600 text-left leading-5 border-0 m-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[90%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>
    </section>
  )
}

IntegranteEmpresa.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    titulo:PropTypes.string,
    bg:PropTypes.string,
    last:PropTypes.bool
  };

export default IntegranteEmpresa