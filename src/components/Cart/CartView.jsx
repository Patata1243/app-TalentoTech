import "./CartView.css";
import { Link } from "react-router-dom";
import { CartSummary } from "./CartSummary";
import { CartList } from "./CartList";
import { useCart } from "../../context/CartContext";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">El carrito está vacío</p>
          <Link to="/">Volver</Link>
        </>
      )}
    </section>
  );
};
