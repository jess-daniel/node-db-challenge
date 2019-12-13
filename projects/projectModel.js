const db = require("../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const getProjects = () => {
  return db("projects");
};

module.exports = {
  getResources,
  getProjects
};
