import { Link } from "react-router-dom";

function Tarjeta({ item, onEliminar }) {
  return (
    <div className="tarjeta-fut wow">
      <div className="tarjeta-img">
        <img src={item.imagen} alt={item.nombre} />
        <span className="rating">{item.dorsal ? 90 - item.dorsal + 5 : 92}</span>
        <span className="posicion">{item.posicion}</span>
      </div>
      <div className="tarjeta-info">
        <h3>{item.nombre}</h3>
        <p className="club">{item.equipo} • {item.nacionalidad}</p>
        <div className="stats">
          <span>EDAD {item.edad}</span>
          <span>#{item.dorsal}</span>
        </div>
        <div className="tarjeta-botones">
          <Link to={`/editar/${item.id}`} className="btn-editar">Editar</Link>
          <button onClick={() => onEliminar(item.id)} className="btn-eliminar">Eliminar</button>
        </div>
      </div>
    </div>
  );
}
export default Tarjeta;