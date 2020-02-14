const express = require('express');

const Actions = require('../data/helpers/actionModel.js.js.js');

const db = require('../data/dbConfig.js.js.js');

const router = express.Router();

// Returns a list of actions from the database at the
// 'http://localhost:5000/api/projects' url
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.query.url);
        res.status(200).json(actions);
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error retrieving the actions; not enough happiness in your face'
        });
    }
});


module.exports = router;