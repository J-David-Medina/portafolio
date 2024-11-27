import img from "../../assets/images/img.png";

export const Home = () => {
  return (
    <aside className="flex items-center justify-center md:flex-col md:border-r md:fixed px-5 pt-10 animated-section border-slate-400">
      <img src={img} alt="David Medina" className="h-32 w-32 rounded-full md:h-60 md:w-60" />

      <div className="text-gray-500 pl-4">
        <div className="mt-3 space-y-2 border-b p-3 border-slate-400">
          <h1 className="text-2xl font-bold text-black">David Medina</h1>
          <p className="text-sm font-bold">Desarrollador web</p>
        </div>

        <div className="mt-3 flex-col space-y-3 md:flex">
          <div className="flex items-center space-x-3">
            <img src="src/assets/svg/planet.svg" alt="" />
            <p>Colombia</p>
          </div>

          <div className="flex items-center space-x-3">
            <img src="src/assets/svg/mail.svg" alt="" />
            <p>juanagudelomedina@gmail.com</p>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center justify-center mt-4 rounded-lg border bg-slate-400 px-4 py-2 font-bold text-white hover:bg-slate-500"
          >
            Contáctame
          </a>
        </div>
      </div>
    </aside>
  );
};
