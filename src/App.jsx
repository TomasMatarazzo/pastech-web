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



const App = () => {
  return (
    <main className="relative py-0">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>}></Route>
        <Route path = '/empresa' element={<Empresa></Empresa>}></Route>
      </Routes>
      <section className="py-4 bg-[#394140]">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App
