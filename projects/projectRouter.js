const router = require("express").Router();

const Projects = require("./projectModel");

// middlewares
const bodyValidation = require("../middlewares/validateProjectBody");

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "We don't have any projects" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.post("/", bodyValidation, (req, res) => {
  const data = req.body;
  Projects.addProject(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;
