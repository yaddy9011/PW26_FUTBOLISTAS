import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";
import { crear } from "../services/api";
function Agregar() {
    const navigate = useNavigate();
    const [datos, setDatos] = useState({
        nombre: "",
        edad: "",
        nacionalidad: "",
        equipo: "",
        posicion: "",
        dorsal: "",
        imagen: ""
    });
    async function manejarSubmit(evento) {
        evento.preventDefault();
        try {
            await crear(datos);
            alert("Registro agregado correctamente");
            navigate("/catalogo");
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <main>
            <h2>Agregar futbolista</h2>
            <Formulario
                datos={datos}
                setDatos={setDatos}
                onSubmit={manejarSubmit}
                textoBoton="Guardar"
            />
        </main>
    );
}
export default Agregar; 