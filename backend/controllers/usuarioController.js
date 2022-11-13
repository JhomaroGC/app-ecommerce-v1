import Usuario from "../models/Usuario.js"

const prueba = (req, res) => {
  res.send({
    msg:"En esta ruta gestionaremos todas las peticiones correspondientes al modelo Usuario"
  })
};


export { prueba};
