import { Nav } from "./components";
import { Footer } from "./sections";
import Landing from "./sections/Landing";
import { productos } from "./assets/constants/constants";
import SectionCircular from "./sections/SectionCircular";
import SectionCircular2 from "./sections/SectionCircular2";
import image1 from "./assets/images/01.jpg"
import image2 from "./assets/images/02.jpg"
import image3 from "./assets/images/03.jpg"
import image4 from "./assets/images/04.jpg"


const App = () => (
  <main className="relative py-0">
    <Nav></Nav>
    <section className="xl:padding-1">
      <Landing></Landing>
      {/* <Button></Button> */}
    </section>
    <section>
      <SectionCircular nombre = {productos[0].nombre}
                descripcion={productos[0].descripcion}
                imagen={image1}
                boton = {productos[0].boton}
                bg = "grey"
      ></SectionCircular>
    </section>
    <section>
      <SectionCircular2 nombre = {productos[1].nombre}
                descripcion={productos[1].descripcion}
                imagen={image2}
                boton = {productos[1].boton}
                bg = "green"
      ></SectionCircular2>
    </section>
    <SectionCircular
      nombre = {productos[2].nombre}
      descripcion={productos[2].descripcion}
      imagen={image3}
      boton = {productos[2].boton}
      bg = "white"
    ></SectionCircular>
    <section className="">
      <SectionCircular2 nombre = {productos[3].nombre}
                  descripcion={productos[3].descripcion}
                  imagen={image4}
                  boton = {productos[3].boton}
                  bg = "white"
                  botonColor = "green"
      ></SectionCircular2>
    </section>
    <section className = "py-4 bg-[#394140]">
      <Footer></Footer>
    </section>

  </main>
);

export default App
