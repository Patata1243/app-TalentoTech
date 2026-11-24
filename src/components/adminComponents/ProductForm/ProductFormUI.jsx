export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>

        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={onChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>
        </div>

        <div>
          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={onChange}
              min="0"
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </label>
        </div>

        <div>
          <label>
            Categoría:
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={onChange}
            />
            {errors.category && <p className="error">{errors.category}</p>}
          </label>
        </div>

        <div>
          <label>
            Descripción:
            <textarea
              name="description"
              value={product.description}
              onChange={onChange}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </label>
        </div>

        <div>
          <label>
            Imagen:
            <input type="file" accept="image/*" onChange={onFileChange} />
            {errors.file && <p className="error">{errors.file}</p>}
          </label>
        </div>

        <button className="" type="submit" disabled={loading}>
          {loading ? "Guardando producto..." : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
