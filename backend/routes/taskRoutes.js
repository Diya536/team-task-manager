const router = require("express").Router();

const Task = require("../models/Task");

router.get("/", async (req, res) => {

    const tasks = await Task.find();

    res.json(tasks);

});

router.post("/", async (req, res) => {

    const task = await Task.create({

      title: req.body.title,

dueDate: req.body.dueDate,

assignedTo: req.body.assignedTo

    });

    res.json(task);

});

router.put("/:id", async (req, res) => {

    const updatedTask = await Task.findByIdAndUpdate(

        req.params.id,

        {
            status: req.body.status
        },

        { new: true }

    );

    res.json(updatedTask);

});
router.delete("/:id", async (req, res) => {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
        message: "Task Deleted"
    });

});
module.exports = router;
