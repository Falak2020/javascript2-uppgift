const router = require('express').Router();
const cartModel = require('./models/shoppingCart/cartModel');

router.post('/addToCart',cartModel.saveProduct);



module.exports = router;