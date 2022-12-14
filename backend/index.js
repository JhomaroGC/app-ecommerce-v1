// https://expressjs.com/es/
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";


dotenv.config();
const PORT = process.env.PORT || 4000;

// Se le agrega toda la funcionalidad del servidor de express
const app = express();
app.use(express.json());
conectarDB();

// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend
const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      // El origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
app.use(cors(corsOptions));

//Gestión modelo de usuario (crear una clase que se llama Usuario la cual se mapea a la base de Datos)
app.use("/api/usuarios", usuarioRoutes);

//Gestión de Modelo Producto
app.use("/api/productos", productoRoutes);

//Gestion Modelo de Ventas
app.use("/api/ventas", ventaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT} `);
});
