var express = require('express');
var router = express.Router();
const {productCart, productDetail} = require('../controllers/productsController');

/* products*/
router
      .get('/productCart', productCart)
      .get('/productDetail', productDetail);

module.exports = router;
