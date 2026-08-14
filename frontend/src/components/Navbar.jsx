import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                ⚽ FutCatalog
            </Link>
            <div className="navbar-links">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
                <Link to="/catalogo" className={location.pathname === "/catalogo" ? "active" : ""}>Catálogo</Link>
                <Link to="/agregar" className={location.pathname === "/agregar" ? "active" : ""}>Agregar</Link>
            </div>
        </nav>
    );
}
export default Navbar;