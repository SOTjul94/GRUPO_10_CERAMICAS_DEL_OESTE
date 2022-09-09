var express = require('express');
var router = express.Router();

const {login, register, processLogin, processRegister, logout} = require('../controllers/userController');
const {loginValidator} = require('../validations');

// const {login, register,processRegister, logout} = require('../controllers/userController');


// const {login, register, logout} = require('../controllers/userController');

const userSessionCheck = require('../middlewares/userSessionCheck');



/* Users */
router
      .get('/register', register)
      .get('/login', login)
      .post('/login',loginValidator,processLogin)

      .get('/register', register)
      .get('/logout', logout)
      .get('/profile', userSessionCheck, profile)


      .get('/register', register)
      .post('/register',processRegister)

module.exports = router;
