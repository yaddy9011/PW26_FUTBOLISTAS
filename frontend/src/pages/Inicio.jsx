import { Link } from "react-router-dom";

function Inicio() {
    return (
        <main className="inicio-hero">
            <h1>Catálogo de Futbolistas</h1>
            <div className="inicio-card">
                <h2>CRUD de Futbolistas</h2>
                <p>
                    Aplicación desarrollada con React, Node.js,
                    Express y almacenamiento en JSON.
                </p>
                <Link to="/catalogo" className="btn-principal">
                    Ver catálogo →
                </Link>
            </div>
        </main>
    );
}
export default Inicio;