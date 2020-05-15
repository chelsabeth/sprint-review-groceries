const express = require('express');
const helmet = require('helmet');

// const StoreRouter = require('./router/store-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use()

server.get('/', (req,res) => {
    res.send('Server is successful!!!');
})

module.exports = server;