import { Link } from "react-router-dom";

function Tarjeta({ item, onEliminar }) {
  return (
    <div className="tarjeta-fut">
      <div className="tarjeta-img">
        <img src={item.imagen || item.foto || "https://via.placeholder.com/300"} alt={item.nombre} />
        <span className="posicion">{item.posicion}</span>
      </div>
      <div className="tarjeta-info">
        <h3>{item.nombre}</h3>
        <p className="club">{item.club || item.equipo} • {item.nacionalidad}</p>
        <p className="datos">#{item.dorsal} | {item.edad} años</p>
        
        <div className="tarjeta-botones">
          <Link to={`/editar/${item.id}`} className="btn-editar">Editar</Link>
          <button onClick={() => onEliminar(item.id)} className="btn-eliminar">Eliminar</button>
        </div>
      </div>
    </div>
  );
}
export default Tarjeta;