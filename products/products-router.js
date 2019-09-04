const router = require('express').Router();

// this router handles URLs that begin with /products
// GET to /products/ only needs what comes after /products
router.get('/', (req, res) => {
    res.send('get to /products/')
});

// GET to /products/:id 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /products/${id}`);
});

module.exports = router;