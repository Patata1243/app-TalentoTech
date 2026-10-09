import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart;
  const total = getCartTotal();
  return (
    <>
      <p>Total a Pagar: ${total}</p>
      <button onClick={checkout}>Ir a Pagar</button>
    </>
  );
};
