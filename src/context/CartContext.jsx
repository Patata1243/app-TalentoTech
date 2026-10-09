import { createContext, useContext } from "react";
//------------------------------------------ Creamos Contexto

export const CartContext = createContext();

//------------------------------------------ Custom Hook

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

//------------------------------------------ Proveedor
