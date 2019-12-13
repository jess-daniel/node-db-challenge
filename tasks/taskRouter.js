const router = require("express").Router();

const Tasks = require("./taskModel");

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

module.exports = router;
