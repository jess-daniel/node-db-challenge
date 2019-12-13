const router = require("express").Router();

const Projects = require("./projectModel");

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

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ message: "We don't have any resources" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;
