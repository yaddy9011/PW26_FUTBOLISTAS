import { Link } from "react-router-dom";
function Tarjeta({ item, onEliminar }) {
    return (<article className="tarjeta">
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre}</h2> <p><strong>Equipo:</strong> {item.equipo}</p>
        <p><strong>Posición:</strong> {item.posicion}</p>
        <p><strong>Nacionalidad:</strong> {item.nacionalidad}</p>
        <p><strong>Dorsal:</strong> {item.dorsal}</p>
        <div className="acciones">
            <Link to={`/editar/${item.id}`}>           Editar         </Link>
            <button onClick={() => onEliminar(item.id)}>           Eliminar         </button>
        </div>     </article>);
}
export default Tarjeta; 