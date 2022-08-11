var express = require('express');
var router = express.Router();
const {productCart, productDetail, editionProduct, creationProduct} = require('../controllers/productsController');

/* products*/
router
      .get('/productCart', productCart)
      .get('/productDetail', productDetail)
      .get('/editionProduct', editionProduct)
      .get('/creationProduct', creationProduct);

      

module.exports = router;
