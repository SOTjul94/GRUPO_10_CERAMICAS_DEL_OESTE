const { Op } = require('sequelize');
const db = require('../database/models');

module.exports = {
    index : (req, res) => {

        let productsDiscount = db.Product.findAll({
            where : {
                discount : {
                    [Op.gte] : 25
                }
            },
            limit : 4
        })

        let productsNewest = db.Product.findAll({
            order : [['createdAt','DESC']],
            limit : 4
        });

        Promise.all([productsDiscount, productsNewest])

            .then(([productsDiscount, productsNewest]) => {
                return res.render('index', {
                    title : 'Home',
                    productsDiscount,
                    productsNewest
                })
            })

     
    }
}