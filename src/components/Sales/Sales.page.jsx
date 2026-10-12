import "./Sales.css";

//hacer un contenedor scrolleable reutilizable para Sales

export const Sales = () => {
  return (
    <section>
      <div>
        <h1>Ofertas de hoy</h1>
      </div>
      <div className="sales-scroll-container">
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>d</p>
        <p>e</p>
      </div>
    </section>
  );
};
