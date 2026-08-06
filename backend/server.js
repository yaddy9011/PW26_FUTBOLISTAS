const express = require("express"); 
const cors = require("cors"); 
const futbolistasRoutes = require("./routes/futbolistasRoutes");  
const app = express(); 
const PORT = 3000;  
app.use(cors()); 
app.use(express.json());  
app.get("/", (req, res) => {   res.json({
    mensaje: "API de futbolistas funcionando" 
}); 
});  
app.use("/api/futbolistas", futbolistasRoutes);  
app.listen(PORT, () => {   
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
