const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.params.query);
        res.status(200).json(projects);
    } catch {
        res.status(500).json(
            'error retrieving the projects'
        )
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.getProjectActions(req.params.id)

        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json('project not found')
        }
    }

    catch(error) {
            res.status(500).json('error retrieving the project')
    }
})


router.post('/', async(req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
    } catch {
    res.status(500).json('error adding the project')
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if(count > 0){
            res.status(200).json("The project aborted")
        } else {
            res.status(401).json("The project is MIA")
        }
    } catch {
        res.status(500).json("Error aborting the project")
    }
})

router.put('/:id', async(req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);

        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json('The project is nowhere')
        }
    } catch {
        res.status(500).json('error updating the project')
    }
})


module.exports = router;