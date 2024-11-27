import { useEffect, useState } from "react";

export const Header = () => {
  const [homeLink, setHomeLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHomeLink("#homemovil");
      } else {
        setHomeLink("#home");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-stone-200 flex items-center justify-center md:py-4 border-b border-slate-400 dark:bg-darkBackground sticky top-0 z-10 ">
        <ul className="flex ">
          <li>
            <a href={homeLink} className="block md:inline-block px-4 py-3 font-bold text-lg md:text-2xl">
              Inicio
            </a>
          </li>
          <li>
            <a href="#portfolio" className="block md:inline-block px-4 py-3 font-bold text-lg md:text-2xl">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contact" className="block md:inline-block px-4 py-3 font-bold text-lg md:text-2xl">
              Contacto
            </a>
          </li>
        </ul>
        {/*  <ThemeSwitch /> */}
      </div>
    </>
  );
};
