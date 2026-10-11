import "./Home.css";
import { Link } from "react-router-dom";

//un scrolleable de las ofertas

export const Home = () => {
  return (
    <section className="home-container">
      <div>
        <h1>Bienvenido a mi tienda</h1>
        <p>Productos nuevos a diario!</p>
      </div>
      <div className="">
        <h2 className="">Nuestras ofertas del mes</h2>
        <Link to="/sales">{}</Link>
      </div>
    </section>
  );
};
