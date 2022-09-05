var express = require('express');
var router = express.Router();
const {login, register,processRegiter} = require('../controllers/userController');


/* Users */
router
      .get('/login', login)
      .get('/register', register)
      .post('/register',processRegiter)
module.exports = router;
