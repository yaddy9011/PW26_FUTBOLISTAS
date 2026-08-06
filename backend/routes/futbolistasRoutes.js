const express = require("express"); 
const controlador = require("../controllers/futbolistasController");  
const router = express.Router();  
router.get("/", controlador.obtenerTodos); 
router.get("/:id", controlador.obtenerPorId); 
router.post("/", controlador.crear); 
router.put("/:id", controlador.actualizar); 
router.delete("/:id", controlador.eliminar);  
module.exports = router; 