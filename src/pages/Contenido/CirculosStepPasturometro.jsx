import React from 'react'
import celular from '../../assets/images/celular.png'
import monitor from '../../assets/images/monitor.jpg'
import pastu from '../../assets/images/ico-pastu.png'


const CirculosStepPasturometro = () => {

    const styles = {
        fontSize: '7em',
        color: 'green',
      };


  return (
    <div className=" w-full  mt-16 max-md:w-full max-md:mt-0 flex relative justify-evenly items-start rounded-[2%] p-8 max-md:flex-col max-md:items-center ">      
        <div className='flex flex-col justify-center items-center text-center w-[22vw] max-md:w-[80vw] '>
            <div target="_blank" className='w-[22vw] h-[22vw] max-md:w-[280px] max-md:h-[280px]  border-[#d4d401] border-[6px] border-dashed rounded-full flex justify-center items-center'>
                <img src={pastu} alt="Whatsapp" width = {200} height= {300} className=' max-md:w-[140px] w-[11vw]' />
            </div>
            <h1 className={` font-bold  leading-8 text-3xl py-6  max-md:text-[32px] text-t-green font-[Roboto]`}>PASTUROMETRO</h1>
            <p className = {`  pt-0 pb-16 max-md:pb-4 font text-2xl `}>Dispositivo electronico que permite medir el pasto y georeferenciar la ubicación.</p>
        </div>
        <span style={styles} className="relative self-center md:mb-0">
        <i className="fa-solid fa-arrow-right"></i>
        </span>
        <div className='flex flex-col justify-center items-center text-center w-[22vw] max-md:w-[80vw]'>
            <div className='w-[22vw] h-[22vw] max-md:w-[280px] max-md:h-[280px]  border-first-green border-[6px] border-dashed rounded-full flex justify-center items-center' target="_blank">
                        <img src={celular} alt="Whatsapp" width = {150} height= {200} className=' max-md:w-[100px] w-[8vw]' />
            </div>
            <h1 className={` font-bold  leading-8 text-3xl py-6  max-md:text-[32px] text-t-green font-[Roboto] items-center`}>CELULAR</h1>
            <p className = {`  pt-0 pb-16 max-md:pb-4 font text-2xl `}>Mediante una aplicación movil es posible visualizar y procesar los datos suministrados por el
            pasturometro</p>

        </div>
        <span style={styles}  className="relative self-center md:mb-0">
            <i className="fa-solid fa-arrow-right"></i>
        </span>
        <div className='flex flex-col justify-center items-center text-center w-[22vw] max-md:w-[80vw]'>
            <div target="_blank" className='w-[22vw] h-[22vw] max-md:w-[280px] max-md:h-[280px]  border-t-green border-[6px] border-dashed rounded-full flex justify-center items-center'>
                <img src={monitor} alt="Whatsapp" width = {200} height= {300} className=' max-md:w-[160px] w-[13vw]' />
            </div>
            <h1 className={` font-bold  leading-8 text-3xl py-6  max-md:text-[32px] text-t-green font-[Roboto]`}>SISTEMA WEB</h1>
            <p className = {`  pt-0 pb-16 max-md:pb-4 font text-2xl `}>Dispositivo electronico que permite medir el pasto y georeferenciar la ubicación.</p>
        </div>
    </div>
  )
}

export default CirculosStepPasturometro