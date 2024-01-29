const router = require('express').Router();
let products = require('../productData');
// const apiKeyMiddleware = require()

router.get('/products',(req,res) => {
    res.render('product',{
        "title":'Product Page'
    });
});

router.get('/api/products', (req,res) => {
    res.json(products);
});


router.post('/api/products', (req, res, next) => {


    const { name, price } = req.body;

    if (!name || !price) {
        next(ErrorHandler.validationError('Name and price fields are required!'));
    }
    const product = {
        name,
        price,
        id: products[products.length - 1]+1
    }
    products.push(product);
    res.json(product);
});


router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id);
    res.json({ status: 'OK' });
});

module.exports = router;