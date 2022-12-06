var express = require('express');
var router = express.Router();

const {login, register, processLogin, processRegister, logout, profile, update, quienesSomos, medidasDePago } = require('../controllers/userController');
const { uploadImageAvatar } = require('../middlewares/uploadFileAvatar');
const userSessionCheck = require('../middlewares/userSessionCheck');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const profileValidator = require('../validations/profileValidator');



/* Users */
router
.get('/register', register)
.post('/register',registerValidator ,processRegister)
.get('/login', login )
.post('/login',loginValidator ,processLogin)
.get('/profile',userSessionCheck, profile)
.put('/update',uploadImageAvatar.single('avatar'), profileValidator, update)
.get('/logout',logout)
.get('/quienesSomos', quienesSomos)
.get('/medidasDePago', medidasDePago);
module.exports = router;
