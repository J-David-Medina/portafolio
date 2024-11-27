export const Body = () => {
  return (
    <>
      <div className="flex justify-between pb-10 ">
        <h2 className="font-bold text-4xl text-gray-500">Bienvenid@s</h2>

        <a
          href="src/assets/pdf/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-400 px-4 py-3 text-white font-bold hover:bg-slate-500 rounded-lg flex items-center"
          aria-label="Download CV"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1h2v14.485l3.242-3.242 1.414 1.414-5.657 5.657-5.657-5.657 1.414-1.414L11 15.485V1z"
              fill="currentColor"
            />
            <path d="M18 20.288H6v2h12v-2z" fill="currentColor" />
          </svg>
          Descargar CV
        </a>
      </div>
      <div className=" space-y-3">
        <p>
          Soy un <strong>desarrollador de software</strong> con una gran pasión por la tecnología y el aprendizaje
          continuo.
        </p>

        <p>
          Con más de un año de experiencia en la creación de soluciones digitales, me especializo en diseñar{" "}
          <strong>interfaces web funcionales</strong> que mejoren la experiencia del usuario, así como en el desarrollo{" "}
          <strong>backend</strong> para garantizar aplicaciones escalables y de alto rendimiento.
        </p>

        <p>
          Mi objetivo es seguir desarrollándome profesionalmente y colaborar en proyectos innovadores que generen un
          impacto real. Me considero una persona <strong>proactiva</strong>, <strong>creativa</strong> y siempre
          dispuesta a asumir nuevos desafíos para mejorar mis habilidades técnicas y contribuir al éxito del equipo.
        </p>
      </div>
      <div className="space-y-3 mt-6">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-500">Frontend</h3>
          <ul className="flex space-x-6 text-gray-500 font-bold">
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="html" className="w-10 h-10" />
              <p>Html</p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/css3.png" alt="css" className="w-10 h-10" />
              <p>Css</p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" className="w-10 h-10" />
              <p>Tailwind CSS </p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap" className="w-10 h-10" />
              <p>Bootstrap </p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/officel/48/react.png" alt="react" className="w-10 h-10" />
              <p>React </p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript" className="w-10 h-10" />
              <p>JavaScript </p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/typescript.png" alt="typescript" className="w-10 h-10" />
              <p>TypeScript </p>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-500">Backend</h3>
          <ul className="flex space-x-6 text-gray-500 font-bold">
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/48/python--v1.png" alt="python" className="w-10 h-10" />
              <p>Python </p>
            </li>
            <li className="flex flex-col items-center">
              <img src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js" className="w-10 h-10" />
              <p>Node.js </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
