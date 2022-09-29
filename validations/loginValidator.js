const {body} = require('express-validator');
const users = require('../data/db').loadUsers();
const bcryptjs =require('bcryptjs');

module.exports = [
    body('email')
        .notEmpty().withMessage('Obligatorio completar el email').bail()
        .isEmail().withMessage('Email válido'),

    body('password')
             .notEmpty().withMessage('Contraseña obligatoria').bail()
             .custom((value, {req}) => {
                let user = users.find(user => user.email === req.body.email.trim() && bcryptjs.compareSync(value, user.password));
                console.log('++++++++++++++++++', user);
                return !!user   
            }).withMessage('Datos incorrectos!!'),
]