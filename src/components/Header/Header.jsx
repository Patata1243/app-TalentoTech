import "./Header.css";
import { Nav } from "../Nav/Nav";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to={"/"}>
            <img src="/img/footware/logo.jpg" alt="Logo Maxwell" />
          </Link>
        </div>

        <h1>Tienda</h1>

        <SearchBar />

        <Nav />
      </header>
    </>
  );
}
