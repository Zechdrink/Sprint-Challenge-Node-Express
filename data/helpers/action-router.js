const express = require('express');

const Actions = require('./actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.query);
        res.status(200).json(actions);
    } catch {
        res.status(500).json(
            'error retrieving the actions'
        )
    }
})

module.exports = router;