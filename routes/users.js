var express = require('express');
var router = express.Router();

const {login, register, processLogin} = require('../controllers/userController');
const {loginValidator} = require('../validations');


/* Users */
router
      .get('/register', register)
      .get('/login', login)
      .post('/login',loginValidator,processLogin)

module.exports = router;
