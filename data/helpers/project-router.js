const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.query);
        res.status(200).json(projects);
    } catch {
        res.status(500).json(
            'error retrieving the projects'
        )
    }
})



module.exports = router;