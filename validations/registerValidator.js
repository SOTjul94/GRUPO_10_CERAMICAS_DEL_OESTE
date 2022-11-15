const { check, body } = require('express-validator');
const users = require('../data/db').loadUsers();
module.exports = [
    check('firstname')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isAlpha('es-ES').withMessage('No se permiten carácteres númericos en el nombre').bail()
        .isLength({
            min : 2
        }).withMessage('Como mínimo 2 carácteres'),
    check('lastname')
        .notEmpty().withMessage('El apellido es obligatorio').bail()
        .isAlpha('es-ES').withMessage('No se permiten carácteres númericos en el apellido').bail()
        .isLength({
            min : 2
        }).withMessage('Como mínimo 2 carácteres'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email válido').bail()
        .custom((value, {req}) => {
            let user = users.find(user => user.email === value.trim());
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),
    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min : 8,
            max : 15
        }).withMessage('La contraseña debe tener entre 8 y 15 carácteres'),
    check('document')
        .isInt('on').withMessage('Solo debe escribir los números, sin guiones ni espacios').bail()
        .isLength({
            min : 7,
            max : 8
        }),
    check('nacionality')
        .isString('on').withMessage('No está permitido utilizar carácteres numéricos'),
    check('birthday')
        .isISO8601().bail()
        .toDate().withMessage('Debe llenar este campo')

 ]
