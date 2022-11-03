const db = require('../../database/models');
const { literal } = require("sequelize");

module.exports = {
    image: (req, res) => {
        res.sendFile(
          path.join(__dirname, `../../public/images/avatars/${req.params.img}`)
        );
      },
    getAll : async (req,res) => {
        
    try {
      const users = await db.Users.findAndCountAll({
          attributes : {
            exclude : ['updateAt', 'createdAt'],
            include : ['firtsname', 'lastname', 'email', 'id']
          }
      })
      const token = await sign({ id, rolId });
    return res.status(200).json({
        count : 12,
        users,
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
    getById : (req,res) => {
      try {
        const options = {
            attributes : {
              exlude : ['createdAt', 'updatedAt', 'rolid', 'password'],
              include : [[literal(`CONCAT( '${req.protocol}://${req.get("host")}/users/image/',avatar)`),'avatar']]
            }
        }
        const {id} = req.params.id
        const data = db.User.findByPk(id,options)
  
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
