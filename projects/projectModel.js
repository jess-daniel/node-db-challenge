const db = require("../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const addProject = data => {
  return db("projects")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return db("projects")
        .where({ id })
        .first()
        .then(project => {
          return project;
        });
    });
};

module.exports = {
  getProjects,
  addProject
};
