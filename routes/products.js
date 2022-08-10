var express = require('express');
var router = express.Router();
const {productCart, productDetail, editionProduct} = require('../controllers/productsController');

/* products*/
router
      .get('/productCart', productCart)
      .get('/productDetail', productDetail)
      .get('/editionProduct', editionProduct);

module.exports = router;
