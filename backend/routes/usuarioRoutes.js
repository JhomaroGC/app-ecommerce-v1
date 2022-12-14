import express from "express";
import {
  prueba,
  registrar,
  confirmar
} from "../controllers/usuarioController.js"; //Aqui se implementa la lógica del negocio

const router = express.Router();
// Rutas Publicas
router.get("/prueba", prueba);

//rutas gestion de usuario
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);

export default router;
