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
        attributes : ['id', 'firstname', 'email']
      })
          
    /*users.map(user =>{
      return{
        ...user,
        detail : 
      }
    })*/
      //const token = await sign({ id, rolId });
    return res.status(200).json({
        count : 12,
        data: users
        //urlData: `${req.protocol}://${req.get("host")}${req.baseUrl}/me/${token}`
    })
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message,
      }); 
}
    },
    getById : (req,res) => {
      try {
        const options = {
            attributes : {
              exclude : ['createdAt', 'updatedAt', 'rolId', 'password'],
              include : [[literal(`CONCAT( '${req.protocol}://${req.get("host")}/users/image/',avatar)`),'avatar']]
            }
        }
        const {id} = req.params.id
        const data = db.User.findByPk(id,options)
  
       return res.status(200).json({
          ok:true,
          status:200,
          data : options
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
