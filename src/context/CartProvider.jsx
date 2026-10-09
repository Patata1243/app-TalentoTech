import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

//------------------------------------------ Proveedor

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const inCart = cart.some((element) => element.id === id);
    return inCart;
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }

    setCart([...cart, item]);
    alert("Producto agregado al carrito!");
  };
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado!");
  };
  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.precio, 0);
  };

  const checkout = () => {
    alert("Su compra a sido realizada!");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
