import express from "express";
import {
  prueba,
} from "../controllers/usuarioController.js"; //Aqui se implementa la lógica del negocio

const router = express.Router();
// Rutas Publicas
router.get("/prueba", prueba);
// router.post("/", registrar);
// router.get("/confirmar/:token", confirmar);

export default router;
