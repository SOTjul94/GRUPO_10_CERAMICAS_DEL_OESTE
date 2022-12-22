const express = require('express');
const router = express.Router();

const {list, addItem, removeItem, removeAllItem} = require('../../controllers/APis/apiCartsController');



// /api/carts

/* Users */

router
    .get('/', list)
    .post('/:id', addItem)
    .delete('/all/:id', removeAllItem)
    .delete('/:id', removeItem)
;

module.exports = router;
