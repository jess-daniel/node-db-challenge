const Projects = require("../projects/projectModel");

const validateProjectId = (req, res, next) => {
  const data = req.body;
  const id = data.project_id;
  Projects.getProjects()
    .where({ id })
    .first()
    .then(project => {
      if (typeof project === "undefined") {
        res.status(400).json({
          message: "The project with the specified ID does not exist"
        });
      } else {
        next();
      }
    });
};

module.exports = validateProjectId;
