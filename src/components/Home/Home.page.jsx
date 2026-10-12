import "./Home.css";

//un scrolleable de las ofertas

export const Home = () => {
  return (
    <section className="home-container">
      <div>
        <h1>Bienvenido a mi tienda</h1>
        <p>Productos nuevos a diario!</p>
      </div>
      <div className="sales-scroll-container">
        <h2 className="">Nuestras ofertas del mes</h2>
      </div>
    </section>
  );
};
