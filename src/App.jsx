import { Nav } from "./components";
import { Footer } from "./sections";
import Landing from "./sections/Landing";
import { empresa } from "./assets/constants/constants";
import image1 from "./assets/images/circuloFer.png"
import image2 from "./assets/images/circuloAle.png"
import image3 from "./assets/images/circuloJuan.png"
import IntegranteEmpresa from "./sections/IntegranteEmpresa";
import IntegranteEmpresa2 from "./sections/IntegranteEmpresa2";
import { Route , Routes} from "react-router-dom";
import Empresa from "./pages/Empresa";
import Mainpage from "./pages/Mainpage";
import wpp from "./assets/images/wpp2.svg"



const App = () => {
  return (
    <main className="relative py-0">
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Mainpage></Mainpage>}></Route>
          <Route path = '/empresa' element={<Empresa></Empresa>}></Route>
        </Routes>
        <section className="bg-[#394140]">
          <Footer></Footer>
        </section>
        <div className='text-3xl fixed bottom-0 right-0'>
                <div className = "">
                <a href = "https://wa.me/5492235431101?text=Hola! Me gustaría obtener información sobre Pastech. ¿Podrían ayudarme con detalles sobre lo que ofrecen?" target = "_blank"> 
                            <img src ={wpp}
                                alt = "Whatsapp"
                                width={90}
                                height={90}/>
                </a>
                </div>
        </div>
    </main>
  );
};

export default App
