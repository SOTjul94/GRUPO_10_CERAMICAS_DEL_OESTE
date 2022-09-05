var express = require('express');
var router = express.Router();
const {login, register, logout} = require('../controllers/userController');

const userSessionCheck = require('../middlewares/userSessionCheck');



/* Users */
router
      .get('/login', login)
      .get('/register', register)
      .get('/logout', logout)
      .get('/profile', userSessionCheck, profile)

module.exports = router;
