import { Nav } from "./components";
import { Footer } from "./sections";
import { Route , Routes} from "react-router-dom";
import Empresa from "./pages/Empresa/Empresa";
import Mainpage from "./pages/Mainpage";
import wpp from "./assets/images/wpp2.svg"
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes/PreguntasFrecuentes";
import Servicios from "./pages/Servicios/Servicios";
import Pasturometro from "./pages/Contenido/Pasturometro";
import Novedades from "./pages/Novedades/Novedades";
import Subscripcion from "./pages/Subscripcion/Subscripcion";
import PastechSatelital from "./pages/PastechSatelital/PastechSatelital";
import PastechDron from "./pages/PastechDron/PastechDron";


const App = () => {
  return (
    <main className="relative py-0">
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Mainpage></Mainpage>}></Route>
          <Route path = '/empresa' element={<Empresa></Empresa>}></Route>
          <Route path = '/contacto' element={<Contacto></Contacto>}></Route>
          <Route path = '/preguntas' element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>
          <Route path = '/servicios' element={<Servicios></Servicios>}></Route>
          <Route path = '/novedades' element={<Novedades></Novedades>}></Route>
          <Route path = '/subscripcion' element={<Subscripcion></Subscripcion>}></Route>
          <Route path = '/pasturometro' element={<Pasturometro></Pasturometro>}></Route>
          <Route path = '/pastech-satelital' element={<PastechSatelital></PastechSatelital>}></Route>
          <Route path = '/pastech-dron' element={<PastechDron></PastechDron>}></Route>
        </Routes>

        <section className="bg-[#394140] z-40">
          <Footer></Footer>
        </section>
        <div className='text-3xl fixed bottom-0 right-0'>
                <div className = "">
                <a href = "https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target = "_blank"> 
                            <img src ={wpp}
                                alt = "Whatsapp"
                                width={60}
                                height={60}/>
                </a>
                </div>
        </div>
    </main>
  );
};

export default App
