import "./UserCard.css";

export const UserCard = ({ imagen, nombre, descripcion, rol }) => {
  return (
    <article className="user-card">
      <div className="user-image-container">
        <img className="user-image" src={imagen} alt={nombre} />
      </div>
      <div className="user-info">
        <h1 className="user-title">{nombre}</h1>
        <h2 className="user-role">{rol}</h2>
        <p className="user-description">{descripcion}</p>
      </div>
    </article>
  );
};
