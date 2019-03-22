const express = require('express');

const helmet = require('helmet');

const actionRouter = require('./data/helpers/action-router.js');
const projectRouter = require('./data/helpers/project-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/actions', actionRouter );
server.use('/api/projects', projectRouter );

server.get('/', (req, res, next) => {
    res.send('Welcome to MY Sprint!')
})

module.exports = server;