import "./CartView.css";
import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout, clearCart } = useCart();
  const total = getCartTotal();
  return (
    <>
      <p>Total a Pagar: ${total}</p>
      <button className="final-pay-button" onClick={checkout}>
        Ir a Pagar
      </button>
      <button className="clean-cart-button" onClick={clearCart}>
        Limpiar Carrito
      </button>
    </>
  );
};
