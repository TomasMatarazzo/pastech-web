
import Titulo from '../../components/Titulo'
import Circulo from '../../components/Circulo'
import { PlantillaFormCompra } from '../../components/PlantillaFormCompra'
import { useParams } from 'react-router-dom';
import imagen from '../../assets/images/icono-satelite2.png' 
import precios from '../../assets/constants/precios';
import { obtenerPrecioDolar } from '../../services/services';
import { useEffect, useState } from 'react'
const FormCompra = () => {

  const { productId } = useParams();
  const [precioDolar, setPrecioDolar] =useState(0);

  const getPrecio = async () => {
    try {
      obtenerPrecioDolar().then((precio) => { setPrecioDolar(precio)});
    }
    catch(e){
      console.log(e)
    }
  } 

  useEffect(() => {
    getPrecio().then(() => console.log(precioDolar));
  }, [precioDolar])

  // armalo con esto sdatos
  // tipo 0 = gratis, 1 = basico, 2 = avanzado, 3 = inteligente
  let tipoSuscripcion;
  
  let tipo = parseInt(productId)
  switch (tipo) {
    case 0:
      tipoSuscripcion = 'Gratis';
      break;
    case 1:
      tipoSuscripcion = 'Basico';
      break;
    case 2:
      tipoSuscripcion = 'Avanzado';
      break;
    case 3:
      tipoSuscripcion = 'Inteligente';
      break;

  }

  let precio;
  let precioPesos;
  switch (tipo) {
    case 0:
      precio = precios[0];
      break
    case 1:
      precio = parseInt(precios[1]);
      precioPesos = precio * parseInt(precioDolar)
      break;
    case 2:
      precio = parseInt(precios[2]);
      precioPesos = precio * parseInt(precioDolar)
      break;
    case 3:
      precio = precios[3];
      precioPesos = precio * parseInt(precioDolar)
      break;
  }


  return (
    <div className='bg-[#e9e8e8]'>
      <Titulo titulo='Subscripción'></Titulo>

      <section className='py-8 px-48  max-md:px-8 min-h-[80vh] z-10'>
        <section className='flex items-center justify-center flex-col text-center'>
          <p className='text-2xl font-medium pb-8 text-t-green z-10'>Ingrese sus datos para finalizar la compra.</p>
          <div className=' w-[100%] relative bg-white pb-0 my-4 rounded-md inline-block'>
            <div className='p-8 flex flex-row max-md:flex-col justify-evenly items-center'>
              <div className='flex flex-col items-center'>
                <div className = {`w-[10vw] rounded-full max-md:w-[270px] max-md:h-[270px] max-lg:w-[510px] max-lg:h-[510px] bg-center bg-cover duration-500 h-[10vw] border-[6px] border-t-green border-dashed flex items-center justify-center `}>
                     <img   className = {`w-[10vw] p-2 rounded-full max-md:w-[260px] max-md:h-[260px] max-lg:w-[500px] max-lg:h-[500px]   bg-center bg-cover duration-500 h-[10vw]border-[3px]`}
                            src = {imagen}
                        />
                        
                </div>
                <p className='py-2 mt-4 text-[36px] leading-[50px] max-md:text-[32px] font-bold font-[Roboto] text-first-green'>Pastech Satelital</p>
                </div>
              <div>
                <p className='py-2  text-2xl leading-[40px] max-md:text-2xl font-normal font-[Roboto] text-t-green'><b>Tipo de suscripción:</b> {tipoSuscripcion}</p>
                <p className='py-2  text-2xl leading-[40px] max-md:text-2xl font-normal font-[Roboto] text-t-green'><b>Precio:</b> <span  className='font-[Lato]'>{precio === "Gratuito" ?"":"USD "}{precio} </span> {precioDolar == "0" ?"":`| ARS ${ precioPesos.toLocaleString('es')} `} </p>
              </div>
            </div>
            {/* <div className='w-[100%] bg-s-green text-s-green'> - </div> */}
          </div>
          </section>
        <Circulo color="first-green max-md:hidden" bg="bg-[#e9e8e8] " position={'left-[-6%] bottom-[40%]'}></Circulo>
        <Circulo color="first-green max-md:hidden" bg="bg-[#e9e8e8] " position={'right-[-5%] bottom-[65%]'}></Circulo>
        <PlantillaFormCompra tipoSubscripcion={tipo}></PlantillaFormCompra>
      </section>
    </div>
  )
}

export default FormCompra