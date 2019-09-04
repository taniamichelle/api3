const express = require('express');

const productsRouter = require('../products/products-router');

const server = express();

// global middleware
server.use(express.json());

server.use('/products', productsRouter);
// server.use('/suppliers', suppliersRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Test</h1>`);
});

// export default server
module.exports = server;