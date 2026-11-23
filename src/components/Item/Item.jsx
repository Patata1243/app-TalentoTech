
export const Item = ({
  children,
  imagen,
  nombre,
  precio,
  descripcion,
}) => {
  return (
    <article className="bg-[#7a5c3cde] w-xs text-center text-black rounded-xl p-6 flex flex-col gap-4 items-center transition-colors duration-250 hover:bg-[#52391e]">
      <div className="">
        <img
          width={110}
          heigth={20}
          src={imagen}
          alt={nombre}
        />
      </div>
      <div className="">
        <h2 className="font-bold text-2xl">{nombre}</h2>
        <p className="font-thin italic">{descripcion}</p>
      </div>
      <div className="">
        <h3 className="font-bold">${precio}</h3>
      </div>
      {children}
    </article>
  );
};
