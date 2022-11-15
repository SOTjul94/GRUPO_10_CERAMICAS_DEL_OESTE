const {body} = require('express-validator');
const db = require('../database/models');
const bcryptjs =require('bcryptjs');

module.exports = [

    body('product').custom((value, {req}) => {
        return db.User.findOne({
            where : {
                email : req.body.productEdit
            }
        }).then(user => {
            if(!user || !compareSync(value,user.product.productEdit)){
                return Promise.reject()
            }
        }).catch(error => Promise.reject('producto no iditado'))
    })

]