const db = require('../../database/models');
const { literal } = require("sequelize");

module.exports = {
    image: (req, res) => {
        res.sendFile(
          path.join(__dirname, `../../public/images/${req.params.img}`)
        );
      },
    getAllProducts : async (req,res) => {
        
    try {
      const products = await db.Products.findAndCountAll({
          attributes : {
            exclude : ['updateAt', 'createdAt'],
            include : ['name', 'description', 'id']
          }
      })
      const token = await sign({id});
    return res.status(200).json({
        count : 12,
        products,
        urlData: `${req.protocol}://${req.get("host")}${req.baseUrl}/me/${token}`
    })
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message,
      }); 
}
    },
    getByIdProducts : (req,res) => {
      try {
        const options = {
            attributes : {
              exlude : ['createdAt', 'updatedAt'],
              include : [[literal(`CONCAT( '${req.protocol}://${req.get("host")}/products/image/',images.file)`),'urlImage']]
            }
        }
        const {id} = req.params.id
        const data = db.Products.findByPk(id,options)
  
       return res.status(200).json({
          ok:true,
          status:200,
          data
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
