const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const db = require('../data/dbConfig.js');

const router = express.Router();

// Returns a list of projects from the database at the
// 'http://localhost:5000/api/projects' url
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.query.url);
        res.status(200).json(projects);
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error retrieving the projects; not enough happiness in your face'
        });
    }
});



module.exports = router;