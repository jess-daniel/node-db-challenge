const db = require("../data/dbConfig");

const getTasks = () => {
  return db("tasks as t")
    .select(
      "t.id",
      "t.description as task_description",
      "p.name as project_name",
      "p.description as project_description",
      "t.notes",
      "t.completed"
    )
    .join("projects as p", "p.id", "t.project_id");
};

const addTask = data => {
  return db("tasks")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return db("tasks")
        .where({ id })
        .first()
        .then(task => {
          return task;
        });
    });
};

module.exports = {
  getTasks,
  addTask
};
