const express = require('express');
const router = express.Router();

const {getAll, getById,image} = require('../../controllers/APis/apiUsersController');


// /api/users

/* Users */

router.get('/', getAll)
router.get('/:id', getById)
router.get("/image/:img", image);

module.exports = router;
