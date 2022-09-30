const fs = require('fs');
const path = require('path');
//////////////////////prueba////////////
const adminUsers = require('../data/users-admin')
const userLogs = (req, res, next)=>{

      fs.appendFileSync('./logs/logs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)
    next();
}
const validaAdmin = (req, res, next)=>{
const admins = adminUsers.map(user => user.userName)
    next();
}

module.exports={
    userLogs,
    validaAdmin
}

////////////////////////////////prueba//////////

//module.exports = (req, res) => {
    
//}