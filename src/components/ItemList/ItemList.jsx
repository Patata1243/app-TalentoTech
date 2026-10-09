import "./ItemList.css";
import { Item } from "../Item/Item";

//más productos similares

export function ItemList({ products }) {
  return (
    <section className="product-list">
      {products.map((producto) => (
        <Item
          key={producto.id}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          categoria={producto.categoria}
          descripcion={producto.descripcion}
        />
      ))}
    </section>
  );
}
