var express = require('express');
var router = express.Router();
const {productCart, productDetail, editionProduct, creationProduct, totalProducts, destroy, update, store, filterProducts, search} = require('../controllers/productsController');

const adminUserCheck = require('../middlewares/adminUserCheck');
const {uploadImageProduct} = require('../middlewares/userLoadFiles');
/* products*/
router
      .get('/productCart', productCart)
      .get('/search', search)
      .get('/productDetail', productDetail)
      .get('/editionProduct', editionProduct)
      .get('/creationProduct', adminUserCheck, creationProduct)
      .get('/totalProducts', totalProducts)
      .get('/filterProducts', filterProducts)
      .get('/products/creationProduct', adminUserCheck, totalProducts)
      .get('/productDetail/:id/', productDetail)
      .post('/store',uploadImageProduct.array('images') , store)
      .get('/editionProduct/:id/', adminUserCheck, editionProduct)
      .put('/editionProduct/:id', adminUserCheck, editionProduct)
      .delete('/delete/:id', adminUserCheck, destroy)
      .put('/update/:id', adminUserCheck, update); 

      

module.exports = router;
