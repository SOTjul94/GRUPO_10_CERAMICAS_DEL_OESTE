var express = require('express');
var router = express.Router();
const {productCart, productDetail, editionProduct, creationProduct, totalProducts, destroy, update, store} = require('../controllers/productsController');

/* products*/
router
      .get('/productCart', productCart)
      .get('/productDetail', productDetail)
      .get('/editionProduct', editionProduct)
      .get('/creationProduct', creationProduct)
      .get('/totalProducts', totalProducts)
      .get('/products/creationProduct', totalProducts)
      .get('/productDetail/:id', productDetail)
      .post('/store', store)
      .get('/editionProduct/:id/', editionProduct)
      .put('/editionProduct/:id', editionProduct)
      .delete('/delete/:id', destroy)
      .put('/update/:id', update); 

      

module.exports = router;
