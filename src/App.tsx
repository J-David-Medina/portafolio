import { Body } from "./components/Body/Home";
import { Header } from "./components/Header/Header";
import { ContextApp } from "./context/ContextApp";
import { Home } from "./components/Body/Aside";
import { Experience } from "./components/Body/Experience";
import { Projects } from "./components/Body/Projects";
import { Contact } from "./components/Body/Contact";
import { Footer } from "./components/Footer/Footer";
import { Section } from "./components/Sections/Section";

function App() {
  return (
    <div className="dark:bg-darkBackground bg-stone-200 text-black dark:text-white px-9 ">
      <ContextApp>
        {/* Fondo y texto con soporte para modo oscuro y claro */}

        <div className="mx-auto max-w-6xl ">
          <Header />
          {/* Componente de encabezado */}

          <main id="homemovil" className="mx-auto md:mt-14 max-w-5xl md:flex">
            <Home />
            {/* Componente principal de bienvenida */}

            <div className="md:ml-[21rem]">
              {/* Margen izquierdo en pantallas grandes */}

              <Section id="home" className="space-y-6">
                {/* Sección Contenido principa*/}
                <Body />
              </Section>

              <Section id="portfolio" className="space-y-11 mb-5">
                {/* Sección Portfolio Experiencia, proyextos */}
                <Experience />
                <Projects />
              </Section>

              <Section id="contact" className="space-y-11">
                {/* Sección de Contacto */}
                <Contact />
              </Section>
            </div>
          </main>

          <Footer />
          {/* Pie de página */}
        </div>
      </ContextApp>
    </div>
  );
}

export default App;
