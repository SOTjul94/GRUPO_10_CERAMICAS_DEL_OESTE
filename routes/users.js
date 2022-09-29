var express = require('express');
var router = express.Router();

const {login, register, processLogin, processRegister, logout, profile} = require('../controllers/userController');
const userSessionCheck = require('../middlewares/userSessionCheck');
const loginValidator = require('../validations/loginValidator');



/* Users */
router
.get('/register', register)
.post('/register', processRegister)
.get('/login', login )
.post('/login',loginValidator ,processLogin)
.get('/profile',userSessionCheck, profile)
.get('/logout',logout)

module.exports = router;
