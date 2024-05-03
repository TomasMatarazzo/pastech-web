import PropTypes from 'prop-types'
import { Button } from '../../components'
import circuloHernan from '../../assets/images/circulos/circuloHernan.png'
import circuloLeopoldo from '../../assets/images/circulos/circuloLeopoldo.png'
import circuloTobias from '../../assets/images/circulos/circuloTobias.png'
import circuloMatias from '../../assets/images/circulos/circuloMatias.png'
import circuloLorenzo from '../../assets/images/circulos/circuloLorenzo.png'
import circuloNicolas from '../../assets/images/circulos/circuloNico.png'
import circuloTomas from '../../assets/images/circulos/circuloTomas.png'
import circuloBautista from '../../assets/images/circulos/circuloBautista.png'
import circuloMelisa from '../../assets/images/circulos/circuloMelisa.png'
import circuloJuan from '../../assets/images/circulos/circuloJuan.png'
import circuloRodrigo from '../../assets/images/circulos/circuloRodrigo.png'
import circuloTomasInsua from '../../assets/images/circulos/circuloTomasInsua.png'

const Colaboradores = ({nombre,imagen,descripcion,titulo,bg = "white",last}) => {




    const colaboradores = [
        {
            nombre: "Hernán Hinojal",
            titulo: "Esp. Lic. en Sistemas",
            descripcion: "Arquitecto de Software",
            imagen: circuloHernan
        },
        {
            nombre: "Tobías Demoor",
            titulo: "Ing. Informático",
            descripcion: "Diseño y desarrollo de los microservicios",
            imagen: circuloTobias
        },
        {
            nombre: "Leopoldo Lening Celaya",
            titulo: "Ing. Informático",
            descripcion: "Diseño y desarrollo de los microservicios",
            imagen: circuloLeopoldo
        },
        {
            nombre: "Matías Veitch",
            titulo: "Ing. Informático",
            descripcion: "Desarrollador dispositivos móviles",
            imagen: circuloMatias
        },
        {
            nombre: "Nicolás Fernando Escudé",
            titulo: "Ing. Informático",
            descripcion: "Desarrollador dispositivos móviles",
            imagen: circuloNicolas
        },
        {
            nombre: "Lorenzo Longaretto",
            titulo: "Estudiante avanzado Ing. Informática",
            descripcion: "Back-end Pastech Satelital",
            imagen: circuloLorenzo
        },
        {
            nombre: "Tomás Matarazzo",
            titulo: "Estudiante avanzado Ing. Informática",
            descripcion: "Desarrollador web. Responsable integración con Pasarelas de pago",
            imagen: circuloTomas
        },
        
        {
            nombre: "Bautista Rodriguez",
            titulo: "Estudiante avanzado Ing. Informática",
            descripcion: "Frond-end Pastech",
            imagen: circuloBautista
        },
        {
            nombre: "Tomás Insua",
            titulo: "Mg. en Business Analytics",
            descripcion: "Consultor Data Scientist",
            imagen: circuloTomasInsua
        },
        {
            nombre: "Melisa Kuzman",
            titulo: "Ing. Electrónica",
            descripcion: "Diseño y desarrollo de la electrónica del sistema. Responsable de la integración del firmware y hardware.",
            imagen: circuloMelisa
        },
        {
            nombre: "Juan Manuel López",
            titulo: "Ing. Electrónico",
            descripcion: "Diseño y desarrollo de la electrónica del sistema. Responsable del diseño y desarrollo del hardware.",
            imagen: circuloJuan
        },
        {
            nombre: "Rodrigo Russo",
            titulo: "Ing. Electrónico",
            descripcion: "Diseño y desarrollo de la electrónica del sistema. Responsable del diseño y desarrollo del firmware.",
            imagen: circuloRodrigo
        }
    ];
        

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
        <section className="flex relative justify-evenly max-md:flex-col rounded-[2%] flex-wrap">
            {colaboradores.map((colaborador, index) => (
                <div key={index} className={`font-extralight  h-full w-[30%] max-md:w-full flex-col max-md:flex-col items-center text-center align-middle flex py-12 max-md:py-10 rounded-lg justify-evenly`}>
                    <img
                        className={`w-[285px] h-[285px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500  rounded-[50%]`}
                        src={colaborador.imagen}
                        width={1000}
                        height={674}
                    />
                    <div className="w-full flex flex-col justify-center items-center text-center max-md:w-[300px]">
                        <h1 className={`${text1[bg]} font-bold  leading-10 text-[28px] py-2  max-md:text-[32px] font-[Roboto] `}>{colaborador.nombre}</h1>
                        <h1 className={`${text1[bg]} font-semibold  leading-8 text-2xl py-2  max-md:text-[32px] text-gray-400 font-[Roboto]`}>{colaborador.titulo}</h1>
                        <p className={` ${text2[bg]} w-[70%] py-2 text-xl font-medium`}>{colaborador.descripcion}</p>
                    </div>
                </div> 
            ))}
        </section>
        {/* <section className="flex relative justify-evenly max-md:flex-col rounded-[2%] flex-wrap">
        {colaboradores.map((colaborador, index) => (
                index > 7 ?
                <div key={index} className={`font-extralight  h-full w-[30%] max-md:w-full flex-col max-md:flex-col items-center text-center align-middle flex py-12 max-md:py-10 rounded-lg justify-evenly`}>
                    <img
                        className={`w-[285px] h-[285px] max-md:w-[300px] max-md:h-[300px] max-md:mb-2 bg-center bg-cover duration-500  rounded-[50%]`}
                        src={colaborador.imagen}
                        width={1000}
                        height={674}
                    />
                    <div className="w-full flex flex-col justify-center items-center text-center max-md:w-[300px]">
                        <h1 className={`${text1[bg]} font-bold  leading-10 text-[28px] py-2  max-md:text-[32px] font-[Roboto] `}>{colaborador.nombre}</h1>
                        <h1 className={`${text1[bg]} font-semibold  leading-8 text-2xl py-2  max-md:text-[32px] text-gray-400 font-[Roboto]`}>{colaborador.titulo}</h1>
                        <p className={` ${text2[bg]} w-[70%] py-2 text-xl font-medium`}>{colaborador.descripcion}</p>
                    </div>
                </div> : null
            ))}
        </section> */}
        { last ? <div className="max-md:hidden z-6 bg-green-600 text-left leading-5 border-0 m-0 p-0 font-light text-base whitespace-nowrap min-h-[0.1rem] min-w-[400px] max-w-[90%] max-h-1 border-[50%] self-center opacity-100 z-5"></div>:null}
    </section>
  )
}

Colaboradores.propTypes = {
    nombre:PropTypes.string,
    descripcion:PropTypes.string,
    imagen:PropTypes.string,
    titulo:PropTypes.string,
    bg:PropTypes.string,
    last:PropTypes.bool
  };

export default Colaboradores