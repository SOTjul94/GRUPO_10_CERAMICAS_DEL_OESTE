const {check,body} = require('express-validator');
const db = require('../database/models');


module.exports = [
    check('name')  //chekea el campo nombre//
    .notEmpty()   //campo no tiene que estar vacio////
    .withMessage('El nombre del producto es obligatorio').bail() //si esta vacio tira mensaje////
    .isLength({
      min : 5,
      max : 50
  }).withMessage('El nombre debe tener entre 5 y 20 caracteres'),
check('price')
  .notEmpty()
  .withMessage('El precio es requerido').bail()
  .isNumeric({
   
  }).withMessage('Solo números positivos'),
  
check('code')
  .notEmpty()
  .withMessage('El codigo es obligatorio').bail(),
check('model')
  .notEmpty()
  .withMessage('Debes dar un model'),
check('description')
  .notEmpty()
  .withMessage('Debes dar una descripción'),
check('style')
  .notEmpty()
  .withMessage('Debes dar un style'),
check('origin')
  .notEmpty()
  .withMessage('Debes dar un origin'),
body('images')
    .custom((value,{req}) => {
        if(req.files.length > 3 ){     ///subir archivo//////
            return false
        }else {
            return true
        }
    }).withMessage('Solo se permiten 3 imágenes')]