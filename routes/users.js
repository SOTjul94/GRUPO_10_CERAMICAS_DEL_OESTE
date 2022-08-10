var express = require('express');
var router = express.Router();
const {login, register} = require('../controllers/userController');


/* Users */
router
      .get('/login', login)
      .get('/register', register);

module.exports = router;
