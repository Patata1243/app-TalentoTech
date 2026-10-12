import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button className="add-to-cart-button" onClick={() => addItem(item)}>
          Agregar al Carrito
        </button>
      </Item>
    </div>
  );
};
