const express = require('express');
const router = express.Router();

let projects = [];

router.post('/', (req, res) => {
    const project = req.body;
    project.milestones = [];
    projects.push(project);
    res.status(201).send(project);
});

router.get('/', (req, res) => {
    res.send(projects);
});

router.put('/:id/milestones', (req, res) => {
    const projectId = req.params.id;
    const milestone = req.body.milestone;
    const project = projects.find(p => p.id === projectId);
    if (project) {
        project.milestones.push(milestone);
        res.send(project);
    } else {
        res.status(404).send({ error: 'Project not found' });
    }
});

module.exports = router;
