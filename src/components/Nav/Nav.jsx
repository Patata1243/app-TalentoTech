import "./Nav.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/sales">Ofertas</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/cart">
        Carrito
        {totalItems > 0 && <span className="inCart"> [ {totalItems} ]</span>}
      </Link>
    </nav>
  );
};
