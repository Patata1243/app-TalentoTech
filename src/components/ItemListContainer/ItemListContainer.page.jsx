import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/validateProduct";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //Obtengo los metadatos de la coleccion (mi tabla)
    const col = collection(db, 'products')

    //Obtengo los metadatos de mis documentos (mis registros)
    getDocs(col)
      .then(({ docs }) => {
        //Obtengo los datos de mis documentos (mis registros)
        const registros = docs.map(d => d.data())

        setProducts(registros)

      })
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
