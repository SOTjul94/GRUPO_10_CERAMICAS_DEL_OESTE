const db = require('../../database/models')
const { literal } = require("sequelize");
const { sign } = require("jsonwebtoken");
module.exports = {
    image: (req, res) => {
        res.sendFile(
          path.join(__dirname, `../../public/images/avatars/${req.params.img}`)
        );
      },
    getAll : async (req,res) => {
        
    try {
      let users = await db.User.findAll({
        attributes : ['id', 'firstname', 'email','birthday','gender','document','birthday','lastname','nacionality',[literal(`CONCAT('${req.protocol}://${req.get("host")}${req.baseUrl}/', id)`),'detailUrl']] 
      })
          
    
    return res.status(200).json({
        ok : true,
        meta: {
          total: users.length
        },
        data: users
        
    })
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message,
      }); 
}
    },
    getById : async (req,res) => {
      try {
        const {id} = req.params;
        let user = await db.User.findByPk(id, {
            attributes : {
              exclude : ['createdAt', 'updatedAt', 'rolId', 'password'],
              include : [[literal(`CONCAT( '${req.protocol}://${req.get("host")}/users/image/', 'defaultUser.png')`),'avatarUrl']]
            }
        })
        
       
  
       return res.status(200).json({
          ok:true,
          meta: {
            total :1
          },
          data : user
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
