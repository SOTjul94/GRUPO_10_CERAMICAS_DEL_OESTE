const {check, body} = require('express-validator');
const users =require('../data').loadUsers();
const bcryptjs =require('bcryptjs')

module.exports = [
    body('email')
        .notEmpty().withMessage('Obligatorio completar el email').bail()
        .isEmail().withMessege('Email válido').bail(),

    body('password')
             .notEmpty().withMessege('Contraseña obligatoria').bail()
             .custom((value, {req}) => {
                let user = users.find(user => user.email === req.email.trim() && bcryptjs.compareSync(value, user.password));
                console.log(user);
                return !!user   
            }).withMessage('Datos incorrectos'),
]