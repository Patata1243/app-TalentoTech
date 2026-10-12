import { useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
  const [busqueda, setBusqueda] = useState("");
  return (
    <form className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button className="search-button" type="submit">
        Buscar
      </button>
    </form>
  );
}
