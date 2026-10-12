import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;
  if (!setProducts) return <p>No se han hallado los productos</p>;

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section>
      <h1 className="product-title">Productos</h1>
      <ItemList products={filteredProducts} />
    </section>
  );
};
