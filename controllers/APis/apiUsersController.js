const db = require('../../database/models');
module.exports = {
    image: (req, res) => {
        res.sendFile(
          path.join(__dirname, `../../public/images/avatars/${req.params.img}`)
        );
      },
    getAll : async (req,res) => {
        
    try {
      const users = await db.Users.findAll({
        include :[{
          attributes : ['id', 'firstname', 'lastname', 'email'],
        }]
      })
    return res.status(200).json({
        count : 12,
        users : [{

        }]
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

    }
}