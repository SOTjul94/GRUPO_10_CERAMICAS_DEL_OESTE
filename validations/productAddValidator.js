const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name") //chekea el campo nombre//
    .notEmpty() //campo no tiene que estar vacio////
    .withMessage("El nombre del producto es obligatorio")
    .bail() //si esta vacio tira mensaje////
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage("El nombre debe tener entre 5 y 20 caracteres"),
  check("model").notEmpty().withMessage("Debes dar un model"),
  check("style").notEmpty().withMessage("Debes dar un estilo"),
  check("transit").notEmpty().withMessage("Debes indicar el tránsito"),
  check("price")
    .notEmpty()

    .withMessage('El precio es requerido').bail()
    .isNumeric({
     }).withMessage('Solo números positivos'),
    
check('box')
    .notEmpty()
    .withMessage('box requerido').bail()
    .isNumeric({
   }).withMessage('Solo números positivos'),
    
check('code') 
    .notEmpty()
    .withMessage('numero de codigo').bail()
    .isNumeric({
   }).withMessage('Solo números positivos'),
check('model')
    .notEmpty()
    .withMessage('Debes dar un model'),
check('descripcion')
    .notEmpty()
    .withMessage('Debes dar una descripción'),
check('transit')
    .notEmpty()
    .withMessage('Debes dar  transit'),
check('dimension')
    .notEmpty()
    .withMessage('Debes dar dimension'),
check('pei')
    .notEmpty()
    .withMessage('debes dar el pei requerido').bail()
    .isNumeric({
   }).withMessage('Solo números positivos'),
check('category')
    .notEmpty()
    .withMessage('Debes dar una category'),
check('color') 
    .notEmpty()
    .withMessage('Debes dar un color'),
check('recomendation')
    .notEmpty()
    .withMessage('Debes dar una recomendation'),
 check('style')
    .notEmpty()
    .withMessage('Debes dar un style'),
check('origin')
    .notEmpty()
    .withMessage('Debes dar un origin'),
body('image')
    .custom((value,{req}) => {
        if(req.files[0]){
            return true        //si existe la informacion return true///
        }else {
            return false      // false no paso la validacion///
        }
    }).withMessage('Debes agregar una imagen'),
body('image')
    .custom((value,{req}) => {
        if(req.files.length > 3 ){     ///subir archivo//////
            return false
        }else {
            return true
        }
    }).withMessage('Solo se permiten 3 imágenes')
]
    //falta transit. box=preccio de caja. discount. dimensions. category. color. recomendaiont

    .withMessage("El precio es requerido")
    .bail()
    .isNumeric({})
    .withMessage("Solo números positivos"),
  check("box").notEmpty().withMessage("Debes indicar el precio x caja"),
  check("discount").notEmpty().withMessage("Debes indicar el descuento"),
  check("dimensions").notEmpty().withMessage("Debes indicar la dimensión"),
  check("pei").notEmpty().withMessage("Debes indicar el PEI"),
  check("categoryId").notEmpty().withMessage("Debes indicar la categoría"),
  check("origin").notEmpty().withMessage("Debes dar un origen"),
  check("color").notEmpty().withMessage("Debes dar un color"),
  check("code")
    .notEmpty()
    .withMessage("Indica el numero de código")
    .bail()
    .withMessage("Solo números positivos"),
  check("recomendation").notEmpty().withMessage("Debes dar una recomendación"),
  check("description").notEmpty().withMessage("Debes dar una descripción"),

  body("image")
    .custom((value, { req }) => {
      if (req.files[0]) {
        return true; //si existe la informacion return true///
      } else {
        return false; // false no paso la validacion///
      }
    })
    .withMessage("Debes agregar una imagen"),
  body("image")
    .custom((value, { req }) => {
      if (req.files.length > 3) {
        ///subir archivo//////
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Solo se permiten 3 imágenes")

  
