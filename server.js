const express = require('express');

const helmet = require('helmet');

const server = express();

server.use(package.json());
server.use(helmet());

server.get('/', (req, res, next) => {
    res.send('Welcome to MY Sprint!')
})