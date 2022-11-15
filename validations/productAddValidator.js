const {body} = require('express-validator');
const db = require('../database/models');
const bcryptjs =require('bcryptjs');

module.exports = [
  

    body('product').custom((value, {req}) => {
        return db.User.findOne({
            where : {
                email : req.body.productAdd
            }
        }).then(user => {
            if(!user || !compareSync(value,user.product)){
                return Promise.reject()
            }
        }).catch(error => Promise.reject('producto invalido'))
    })
]