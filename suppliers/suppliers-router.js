const express = require('express');

const router = express.Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles URLs that begin with /suppliers
// GET to /suppliers/ 
router.get('/', (req, res) => {
    res.send('get to /suppliers/')
});

// GET to /suppliers/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /suppliers/${id}`);
});

module.exports = router;