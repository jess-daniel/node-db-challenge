const router = require("express").Router();

const Tasks = require("./taskModel");

//middleware
const validateDescrition = require("../middlewares/validateDescription");
const validateProjectId = require("../middlewares/validateProjectId");

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      if (tasks) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: "We don't have any tasks" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.post("/", validateProjectId, validateDescrition, (req, res) => {
  const data = req.body;
  Tasks.addTask(data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;
