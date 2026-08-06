import { Link } from "react-router-dom";
function Navbar() {

    return (<nav className="navbar">
        <h1>Catálogo de Futbolistas</h1>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/agregar">Agregar</Link>
        </div>
    </nav>);
}
export default Navbar; 