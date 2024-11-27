export const Projects = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-gray-500">Proyectos</h2>
      <div className="border border-black rounded-xl p-5 shadow-md">
        <h4 className="text-xl font-bold mb-3">E-Commerce</h4>
        <p className="mb-4">
          Desarrollé una tienda virtual de productos en la que los usuarios pueden explorar una variedad de artículos,
          agregar al carrito y realizar compras. Además, implementé un panel de administración donde los administradores
          pueden agregar, modificar y eliminar productos, facilitando la gestión del inventario de manera eficiente.
        </p>

        <div className="flex justify-between items-center  ">
          <p className="text-sm text-gray-500">Html - Css - JavaScript - Php- MySQL</p>

          <a href="https://github.com/J-David-Medina/sena-e-commerce" target="_blank" className="cursor-pointer">
            <img className="w-8 h-8" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
          </a>
        </div>
      </div>
    </>
  );
};
