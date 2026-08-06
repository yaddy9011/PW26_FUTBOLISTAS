function Formulario({ datos, setDatos, onSubmit, textoBoton }) {
    function manejarCambio(evento) {
        const { name, value } = evento.target;
        setDatos({
            ...datos, [name]: value

        });
    }
    return (<form className="formulario" onSubmit={onSubmit}>
        <label>
            Nombre
            <input
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            Edad
            <input
                type="number"
                name="edad"
                value={datos.edad}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            Nacionalidad
            <input
                type="text"
                name="nacionalidad"
                value={datos.nacionalidad}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            Equipo
            <input
                type="text"
                name="equipo"
                value={datos.equipo}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            Posición
            <input
                type="text"
                name="posicion"
                value={datos.posicion}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            Dorsal
            <input
                type="number"
                name="dorsal"
                value={datos.dorsal}
                onChange={manejarCambio}
                required
            />
        </label>
        <label>
            URL de imagen
            <input
                type="url"
                name="imagen"
                value={datos.imagen}
                onChange={manejarCambio}
                required
            />
        </label>
        <button type="submit">
            {textoBoton}
        </button>
    </form>
    );
}
export default Formulario; 