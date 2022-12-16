const db = require('../../database/models');
const { literal } = require("sequelize");
const { sign } = require("jsonwebtoken");

module.exports = {
    image: (req, res) => {
        res.sendFile(
          path.join(__dirname, `../../public/images/${req.params.img}`)
        );
      },
    getAllProducts : async (req,res) => {
        
    try {
      const products = await db.Product.findAll({
        attributes: 
           ["id","name","description",[literal(`CONCAT('${req.protocol}://${req.get("host")}${req.baseUrl}/', id)`),"detailUrl",],],
      
      })
      
    return res.status(200).json({
      ok: true,
      meta: {
        totalProducts: products.length,
      },
      data: products,
    })
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message,
      }); 
}
    },
    getByIdProducts : async (req,res) => {
      try {
         const {id} = req.params;
        let product = await db.Product.findByPk(id, {
            attributes : {
              exclude : ['createdAt', 'updatedAt', 'rolId', 'password'],
              include : [[literal(`CONCAT('${req.protocol}://${req.get("host")}${req.baseUrl}/images/', 'id')`),"fileUrl",]]
            }
        })
  
       return res.status(200).json({
           ok:true,
          meta: {
            total :1
          },
          data : product
        })
      } catch (error) {
        res.status(500).json({
          ok: false,
          status: 500,
          msg: error.message,
        }); 
    }
  }
}
