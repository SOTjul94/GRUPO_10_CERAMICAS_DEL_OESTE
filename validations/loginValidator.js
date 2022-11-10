const {body} = require('express-validator');
const db = require('../database/models');
const bcryptjs =require('bcryptjs');

module.exports = [
    body('email')
        .notEmpty().withMessage('Obligatorio completar el email').bail()
        .isEmail().withMessage('Email válido'),

    body('password')
             .notEmpty().withMessage('Contraseña obligatoria').bail()
             .custom((value, {req}) => {
                return db.User.findOne({
                    where : {
                        email : req.body.email
                    }
                }).then(user => {
                    if(!user || !bcryptjs.compareSync(value, user.password)){
                        return Promise.reject()
                    }
                }).catch(error => {
                    console.log(error)
                    return Promise.reject('Datos incorrectos!!')
                })
               
            })
]