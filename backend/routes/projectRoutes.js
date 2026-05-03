const router = require("express").Router();

const Project = require("../models/Project");

router.get("/", async (req, res) => {

    const projects = await Project.find();

    res.json(projects);

});

router.post("/", async (req, res) => {

    const project = await Project.create({

        title: req.body.title

    });

    res.json(project);

});

module.exports = router;