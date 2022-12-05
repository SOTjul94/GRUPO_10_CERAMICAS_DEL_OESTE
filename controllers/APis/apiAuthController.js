const db = require('../../database/models');
const {compareSync} = require('bcryptjs');
const {sign} = require('jsonwebtoken');


module.exports ={
    signIn : async (req,res) =>{
     try {
         const { email, password } = req.body;
   
         if (!email || !password) {
           return res.status(401).json({
             ok: false,
             status: 401,
             msg: "El email y password son requeridos",
           }); 
         }
   
         const user = await db.User.findOne({ where: { email } });
   
         const { id, rolId, password: passwordHash } = user || { id:null, rolId:null,password:null }
   
         if (!user) {
            return res.status(404).json({
             ok: false,
             status: 404,
             msg: "No existe ningún usuario con ese email",
           }); 
         }
   
         const isPassValid = await compareSync(password,passwordHash)
   
         if(!isPassValid){
            return res.status(401).json({
             ok: false,
             status: 401,
             msg: "Credenciales invalidas",
           }); 
         }
   
         const token = await sign({ id, rolId }, process.env.SECRET_KEY_JWT, {
           expiresIn: "4h",
         });
   
         res.status(200).json({
           ok: true,
           status: 200,
           token,
           urlData: `${req.protocol}://${req.get("host")}${req.baseUrl}/me/${token}`,
         });
   
       } catch (error) {
          res.status(500).json({
           ok: false,
           status: 500,
           msg: error.message,
         }); 
       }
    }
     
 }