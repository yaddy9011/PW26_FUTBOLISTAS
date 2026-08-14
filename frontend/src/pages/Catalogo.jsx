import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerTodos, eliminar } from "../services/api";
import Tarjeta from "../components/Tarjeta";

function Catalogo() {
    const [datos, setDatos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtroPosicion, setFiltroPosicion] = useState("Todas");

    useEffect(() => {
        cargarDatos();
    }, []);

    async function cargarDatos() {
        try {
            const datosAPI = await obtenerTodos();
            setDatos(datosAPI);
        } catch (error) {
            alert(error.message);
        }
    }

    async function manejarEliminar(id) {
        if (confirm("¿Seguro que deseas eliminar?")) {
            try {
                await eliminar(id);
                cargarDatos();
            } catch (error) {
                alert(error.message);
            }
        }
    }

    
    const datosFiltrados = datos.filter((item) => {
        const coincideNombre = item.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                               item.equipo.toLowerCase().includes(busqueda.toLowerCase());
        const coincidePos = filtroPosicion === "Todas" || item.posicion === filtroPosicion;
        return coincideNombre && coincidePos;
    });

    return (
        <main>
            <div className="encabezado-catalogo">
                <h2>Plantilla ({datosFiltrados.length})</h2>
                <Link to="/agregar" className="btn-principal">+ Agregar nuevo</Link>
            </div>

            {}
            <div className="filtros-bar">
                <input 
                    type="text" 
                    placeholder="🔍 Buscar por nombre o equipo..." 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="input-busqueda"
                />
                <select value={filtroPosicion} onChange={(e) => setFiltroPosicion(e.target.value)} className="select-filtro">
                    <option value="Todas">Todas las posiciones</option>
                    <option value="Portero">Portero</option>
                    <option value="Defensa">Defensa</option>
                    <option value="Mediocampista">Mediocampista</option>
                    <option value="Delantero">Delantero</option>
                </select>
            </div>

            <section className="catalogo-grid">
                {datosFiltrados.length === 0 ? (
                    <p className="no-resultados">No se encontró a nadie con "{busqueda}" 😢</p>
                ) : (
                    datosFiltrados.map((item) => (
                        <Tarjeta key={item.id} item={item} onEliminar={manejarEliminar} />
                    ))
                )}
            </section>
        </main>
    );
}
export default Catalogo;