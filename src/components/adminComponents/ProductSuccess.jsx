import { useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section>
      <div>
        <h2>Producto cargado con éxito!</h2>
        <p>ID del producto: {id}</p>
      </div>
      <div>
        <h2>
          <Link to="/admin">Cargar otro producto</Link>
        </h2>
      </div>
    </section>
  );
};
