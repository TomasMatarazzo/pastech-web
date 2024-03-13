import PropTypes from 'prop-types'


const MisionVision = ({tituloMision,tituloVision,descripcionMision,descripcionVision,bg = "white"}) => {


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
            <div className = {`flex font-extralight h-full w-full   max-md:flex-col-reverse max-md:items-center max-md:align-middle flex flex-row py-12 max-md:py-10 rounded-lg justify-evenly align-baseline`}>
                <div className='w-[30%]  flex flex-col justify-start items-center text-center max-md:text-center max-md:w-[300px] align-baseline '>
                    <h2 className={`${text1[bg]} py-2  text-[55px] leading-[50px] max-md:text-[32px] font-bold text-first-green font-[Roboto] `}>{tituloMision}</h2>
                    <p className = {` ${text2[bg]} pt-4 font-semibold text-xl font-[Roboto] whitespace-pre-line max-md:font-normal max-md:text-[20px]`}>{descripcionMision}</p>
                </div>
                <div className='w-1/3  flex flex-col justify-start items-center text-center max-md:text-center max-md:w-[300px] justify-start'>
                <h2 className={`${text1[bg]} py-2  text-[55px] leading-[50px] max-md:text-[32px] font-bold text-first-green font-[Roboto] `}>{tituloVision}</h2>
                    <p className = {` ${text2[bg]} pt-4 font-semibold text-xl font-[Roboto] max-md:text-[20px] max-md:font-normal whitespace-pre-line max-md:font-normal max-md:text-[20px]`}>{descripcionVision}</p>
                </div>
            </div>
        </section>
        <div className="max-md:hidden z-6 bg-green-600 text-left leading-5 border-0 m-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] self-center opacity-100 z-5 max-w-[90%] max-h-1 border-[50%]"></div>
    </section>
  )
}

MisionVision.propTypes = {
    tituloMision:PropTypes.string,
    tituloVision:PropTypes.string,
    descripcionMision:PropTypes.string,
    descripcionVision:PropTypes.string,
    bg:PropTypes.string,
  };

export default MisionVision