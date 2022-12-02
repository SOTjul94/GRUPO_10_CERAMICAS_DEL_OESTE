const express = require('express');
const router = express.Router();

const {signIn} = require('../../controllers/APis/apiAuthController');


// /api/users

/* Users */

router.get('/signIn', signIn)


module.exports = router;
