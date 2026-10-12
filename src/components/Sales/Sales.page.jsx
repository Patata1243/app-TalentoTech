import "./Sales.css";

//hacer un contenedor scrolleable reutilizable para Sales
/* dividido por categorias */

export const Sales = () => {
  return (
    <section>
      <div className="sales-title">
        <h1>Ofertas de hoy</h1>
      </div>
      <div className="sales-scroll-container"></div>
    </section>
  );
};
