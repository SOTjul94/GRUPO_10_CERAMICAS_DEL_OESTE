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
        check('nacionality')
        .isString('on').withMessage('No está permitido utilizar carácteres numéricos'),
    check('document')
        .isInt('on').withMessage('Solo debe escribir los números, sin guiones ni espacios').bail()
        .isLength({
            min : 7,
            max : 8
        }),
    check('gender')
        .isString('on').withMessage('No está permitido utilizar carácteres numéricos'),
    check('birthday')
        .isISO8601().bail()
        .toDate().withMessage('Debe llenar este campo')
    

 ]