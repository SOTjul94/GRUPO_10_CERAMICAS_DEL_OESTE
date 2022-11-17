var express = require('express');
var router = express.Router();
const {productCart, productDetail, editionProduct, creationProduct, totalProducts, destroy, update, store, filterProducts, search} = require('../controllers/productsController');

const adminUserCheck = require('../middlewares/adminUserCheck');
const {uploadImageProduct} = require('../middlewares/userLoadFiles');
const productAddValidator = require('../validations/productAddValidator');
const productEditValidator = require('../validations/productEditValidator');

/* products*/
router
      .get('/totalProducts', totalProducts)
      .get('/filterProducts', filterProducts)
      .get('/productDetail/:id/', productDetail)

      .get('/creationProduct', adminUserCheck, creationProduct)
      .post('/store',uploadImageProduct.array('images'),productAddValidator, store)

      .get('/editionProduct/:id', adminUserCheck, editionProduct)
      .put('/editionProduct/:id', adminUserCheck,productEditValidator, editionProduct)

      .delete('/delete/:id', adminUserCheck, destroy)

      .get('/search', search)
      .get('/productCart', productCart)
   
      

      

module.exports = router;
