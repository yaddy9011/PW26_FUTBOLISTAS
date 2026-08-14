function Formulario({ datos, setDatos, onSubmit, textoBoton }) {
    function manejarCambio(evento) {
        const { name, value } = evento.target;
        setDatos({
           ...datos, [name]: value
        });
    }
    return (
        <form className="form-fut" onSubmit={onSubmit}>
            <div className="form-grid">
                <label className="form-group">
                    Nombre
                    <input type="text" name="nombre" value={datos.nombre} onChange={manejarCambio} required />
                </label>
                <label className="form-group">
                    Edad
                    <input type="number" name="edad" value={datos.edad} onChange={manejarCambio} required />
                </label>
                <label className="form-group">
                    Nacionalidad
                    <input type="text" name="nacionalidad" value={datos.nacionalidad} onChange={manejarCambio} required />
                </label>
                <label className="form-group">
                    Equipo
                    <input type="text" name="equipo" value={datos.equipo} onChange={manejarCambio} required />
                </label>
                <label className="form-group">
                    Posición
                    <input type="text" name="posicion" value={datos.posicion} onChange={manejarCambio} required />
                </label>
                <label className="form-group">
                    Dorsal
                    <input type="number" name="dorsal" value={datos.dorsal} onChange={manejarCambio} required />
                </label>
            </div>

            <label className="form-group full">
                URL de imagen
                <input type="url" name="imagen" value={datos.imagen} onChange={manejarCambio} required />
            </label>

            {datos.imagen && (
                <div className="preview-img">
                    <img src={datos.imagen} alt="preview" />
                </div>
            )}

            <button type="submit" className="btn-guardar">
                {textoBoton}
            </button>
        </form>
    );
}
export default Formulario;