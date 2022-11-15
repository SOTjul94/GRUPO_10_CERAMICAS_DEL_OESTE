const {body} = require('express-validator');
const db = require('../database/models');
const bcryptjs =require('bcryptjs');

module.exports = [
    check('productAdd')
    .notEmpty().withMessage('El producto es obligatorio').bail()
    .isEmail().withMessage('Debe ingresar un producto válido'),
body('password')
    .notEmpty().withMessage('La contraseña es obligatoria').bail()
    .custom((value, {req})=> {
        let user = users.find(user => user.email === req.body.email.trim() && bcryptjs.compareSync(value, user.password));
        if(!user){
            return false
        }else{
            return true
        }
    }).withMessage('producto inválido')
]