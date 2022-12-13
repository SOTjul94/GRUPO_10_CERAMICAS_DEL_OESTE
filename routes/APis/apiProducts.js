const express = require('express');
const router = express.Router();

const {getAllProducts, getByIdProducts,image} = require('../../controllers/APis/apiProductsController');


// /api/users

/* Users */

router.get('/', getAllProducts)
router.get('/:id', getByIdProducts)
router.get("/image/:img", image);
/*router.get('/', countByCategory)*/
module.exports = router;
 