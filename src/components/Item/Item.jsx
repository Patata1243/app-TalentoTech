import "./Item.css";

export const Item = ({
  children,
  imagen,
  nombre,
  precio,
  descripcion,
  categoria,
}) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={imagen} alt={nombre} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{nombre}</h2>
        <h3 className="product-category">{categoria}</h3>
        <p className="product-description">{descripcion}</p>
      </div>
      <div className="product-price-container">
        <h3 className="product-price">${precio}</h3>
      </div>
      {children}
    </article>
  );
};
