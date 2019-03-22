const express = require('express');

const Actions = require('./actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.query);
        res.status(200).json(actions);
    } catch {
        res.status(500).json(
            'error retrieving the actions'
        )
    }
})

router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id)

        if(action){
            res.status(200).json(action)
        } else {
            res.status(404).json('action not found')
        }
    }

    catch(error) {
            res.status(500).json('error retrieving the action')
    }
})

router.post('/', async(req, res) => {
    try {
        const action = await Actions.insert(req.body);
        res.status(201).json(action);
    } catch {
    res.status(500).json('error adding the action')
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const count = await Actions.remove(req.params.id);
        if(count > 0){
            res.status(200).json("The action has been terminated")
        } else {
            res.status(401).json("The action could not be found")
        }
    } catch {
        res.status(500).json("Error removing the action")
    }
})

router.put('/:id', async(req, res) => {
    try{
        const action = await Actions.update(req.params.id, req.body);

        if(action){
            res.status(200).json(action)
        } else {
            res.status(404).json('The user could not be found')
        }
    } catch {
        res.status(500).json('error updating the user')
    }
})

module.exports = router;