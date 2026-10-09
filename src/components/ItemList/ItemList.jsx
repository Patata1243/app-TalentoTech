import "./ItemList.css";
import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";

export function ItemList({ products }) {
  const { addItem } = useCart();
  return (
    <section className="product-list">
      {products.map((producto) => (
        <Item
          key={producto.id}
          id={producto}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          categoria={producto.categoria}
          descripcion={producto.descripcion}
        >
          <button
            className="add-to-cart-button"
            onClick={() => addItem(producto)}
          >
            Añadir al Carrito
          </button>
        </Item>
      ))}
    </section>
  );
}
