const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>Test</h1>`);
});

// export default server
module.exports = server;