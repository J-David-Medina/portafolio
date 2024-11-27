export const Experience = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-gray-500">Experiencia</h2>
      <ul>
        <li className="relative flex gap-6 z-0">
          <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#9ca3af" />
            </svg>
          </div>
          <div className="text-sm text-black">
            <p className="text-xl font-bold">Desarrollador Front-End</p>
            <div className="flex space-x-3">
              <p className="text-base font-medium text-gray-500">
                Abr 2024
                <strong>-</strong>
                Oct 2024
              </p>
            </div>
            <p className="mt-2 font-medium text-base">
              Formé parte de un equipo de innovación donde desarrollé interfaces con React y Tailwind CSS. Implementé
              soluciones clave que mejoraron significativamente los procesos internos de la organización. En este
              proceso, creé dos módulos que optimizaron la eficiencia operativa:
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 100 100" className="mr-2">
                    <circle cx="50" cy="50" r="40" stroke-width="3" fill="#9ca3af" />
                  </svg>
                  <strong className="text-base font-bold text-gray-500">Helpdesk</strong>
                </div>
                <p className="ml-6 mt-1 text-base font-medium">
                  Diseñé un sistema que mejoró la comunicación entre el call center y el equipo de TI, reduciendo los
                  tiempos de espera y acelerando la resolución de problemas.
                </p>
              </li>

              <li>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 100 100" className="mr-2">
                    <circle cx="50" cy="50" r="40" stroke-width="3" fill="#9ca3af" />
                  </svg>
                  <strong className="text-base font-bold text-gray-500">Skilcraft</strong>
                </div>
                <p className="ml-5 mt-1 text-base font-medium">
                  También desarrollé una herramienta para evaluar el desempeño de los agentes en llamadas y chats, lo
                  que contribuyó a mejorar su rendimiento y calidad de servicio.
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};
