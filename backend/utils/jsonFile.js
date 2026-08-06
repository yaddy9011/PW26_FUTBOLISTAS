const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '../data/futbolistas.json');

function leerDatos() {
    try {
        const contenidos = fs.readFileSync(rutaArchivo, 'utf-8');
        return contenidos ? JSON.parse(contenidos) : [];
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
}
function guardarDatos(datos) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(datos, null, 2), 'utf-8');
}
module.exports = {
    leerDatos,
    guardarDatos
};
