const express = require('express');
const router = express.Router();

const {list, addItem, removeItem, modifyQuantity} = require('../../controllers/APis/apiCartsController');



// /api/carts

/* Users */

router
    .get('/', list)
    .post('/', addItem)
    .post('/quantity',modifyQuantity)
    .delete('/:id', removeItem)
;

module.exports = router;
