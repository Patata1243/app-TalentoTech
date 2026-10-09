import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout, clearCart } = useCart();
  const total = getCartTotal();
  return (
    <>
      <p>Total a Pagar: ${total}</p>
      <button onClick={checkout}>Ir a Pagar</button>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};
