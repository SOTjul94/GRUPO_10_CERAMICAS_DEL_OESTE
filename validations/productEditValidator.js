const {check,body} = require('express-validator');
const db = require('../database/models');


module.exports = [
check('name')//chekea el campo title//
      .notEmpty()   //campo no tiene que estar vacio///
      .withMessage('El nombre del producto es obligatorio').bail()//si esta vacio tira mensaje//
      .isLength({
        min : 5,
        max : 50
    }).withMessage('El nombre debe tener entre 5 y 20 caracteres'),
check('price')
    .notEmpty()
    .withMessage('El precio es requerido').bail()
    .isNumeric({
        
    }).withMessage('Solo números positivos'), check('model')
    .notEmpty()
    .withMessage('Debes indicar el modelo'),
check('description')
    .notEmpty()
    .withMessage('Debes dar una descripción'),
check('category')
    .notEmpty()
    .withMessage('Debes dar una category'),

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
    }).withMessage('Solo se permiten 3 imágenes')]


   /* name: name?.trim(),
				description: description.trim(),
*/