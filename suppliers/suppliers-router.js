const router = require('express').Router();

// this router handles URLs that begin with /suppliers
// GET to /suppliers/ 
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
});

// GET to /suppliers/:id
router.get('/:name', (req, res) => {
    res.send(`get to /suppliers/${req.params.name}`);
});

module.exports = router;