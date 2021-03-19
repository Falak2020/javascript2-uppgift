const router = require('express').Router();
const cartModel = require('./models/shoppingCart/cartModel');

router.post('/add',cartModel.saveProduct);



module.exports = router;