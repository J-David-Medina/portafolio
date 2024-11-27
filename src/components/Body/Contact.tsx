import { useForm } from "react-hook-form";
import "../../index.css";
import { useState } from "react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loadind, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    fetch("https://formsubmit.co/ajax/juandavidmedina398@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => (res.ok ? res.json() : res.text()))
      .then(() => {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      })
      .catch((err) => console.error("Error al enviar el formulario:", err))
      .finally(() => {
        reset(), setLoading(false);
      });
  };

  return (
    <>
      <h2 className="font-bold text-4xl text-gray-500 mt-10">Contacto</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
        <div className="grid gap-2 mb-3 md:grid-cols-2">
          <div>
            <input
              id="name"
              className="py-4 rounded-lg px-6 placeholder:text-lg bg-stone-200 border border-slate-400 w-full"
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
              title="Nombre sólo acepta letras y espacios en blanco"
              placeholder="Ingresa tu nombre *"
            />
            {errors.name && <p className="text-red-500 text-sm">Por favor, completa este campo.</p>}
          </div>

          <div>
            <input
              id="email"
              className="py-4 rounded-lg px-6 placeholder:text-lg bg-stone-200 border border-slate-400 w-full"
              type="email"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
              title="Email incorrecto"
              placeholder="Ingresa tu correo *"
            />
            {errors.email && <p className="text-red-500 text-sm">Por favor, completa este campo.</p>}
          </div>
        </div>

        <div>
          <textarea
            id="comments"
            className="resize w-full rounded-lg placeholder:text-lg px-6 py-4 bg-stone-200 border border-slate-400"
            placeholder="Déjame tus comentarios *"
            title="Deja tus comentarios"
            {...register("comments", { required: true })}
            rows={4}
          ></textarea>
          {errors.comments && <p className="text-red-500 text-sm">Por favor, completa este campo.</p>}
        </div>

        <div className="flex justify-center">
          {!loadind ? (
            <button
              type="submit"
              className="bg-slate-400 text-white rounded-lg hover:bg-slate-500 px-4 py-2 font-bold cursor-pointer"
            >
              ENVIAR MENSAJE
            </button>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </form>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 ">
          <div className="bg-white p-3 font-bold text-lg rounded-lg w-72 flex items-center justify-center flex-col">
            <p className="">¡Muchas Gracias ! </p>
            <p className="">Por tus comentarios </p>
            <img width="50" height="50" src="https://img.icons8.com/sf-regular/48/happy.png" alt="happy" />
          </div>
        </div>
      )}
    </>
  );
};
