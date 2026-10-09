import "./Nav.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/ofertas">Ofertas</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/carrito">
        Carrito [
        {totalItems > 0 && <span className="inCart">{totalItems}</span>}]
      </Link>
    </nav>
  );
};
