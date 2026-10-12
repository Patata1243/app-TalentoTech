import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//hacer filtrado por categorias

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [ItemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //  const [category, setCategory] = useState(false)

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json)
      .then((data) => {
        const item = data.find((product) => String(product.id) === id);
        if (item) {
          setItemDetail(item);
          return;
        } else {
          throw new Error("Elemento no encontrado");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!ItemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1 className="product-detail-title">Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={ItemDetail} />
      </div>
    </section>
  );
};
