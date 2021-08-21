const express = require('express');
const ErrorHnadler = require('../Errorhandler/errorHandler');
const router = express.Router();
let products = require('../productData')

router.use(express.json());
router.get('/products', (req, res) => {
    res.render('products', {
        title: 'Product page'
    })
})
router.get('/api/products', (req, res) => {
    res.json(products)
})

router.post('/api/products', (req, res ,next) => {
    const { name, price } = req.body;
    if (!name || !price) {
     next (ErrorHnadler.validationError('Name and Price fields are required '));
     
    }

    const product =

    {
        name, price,
        id: new Date().getTime().toString()
    }

    products.push(product);
    res.json(product);
    console.log(product);

})

router.delete('/api/products/:productId', (req, res) => {
  products= products.filter((product)=>req.params.productId != product.id);
   res.json({status:'ok'})
})
module.exports = router;