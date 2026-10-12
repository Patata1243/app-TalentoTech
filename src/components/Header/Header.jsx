import "./Header.css";
import { Nav } from "../Nav/Nav";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Home } from "../Home/Home.page";

export function Header() {
  return (
    <>
      <header className="header">
        <Link className="logo" to={"/"} element={<Home />}>
          <img
            width={75}
            height={75}
            src="/img/footware/logo.jpg"
            alt="Logo Maxwell"
          />
        </Link>

        <h1>Tienda</h1>

        <SearchBar />

        <Nav />
      </header>
    </>
  );
}
