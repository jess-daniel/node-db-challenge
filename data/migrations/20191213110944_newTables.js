exports.up = function(knex) {
  return knex.schema
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();

      tbl.string("description", 255);
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("description", 255).notNullable();

      tbl.string("notes", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("name", 255).notNullable();

      tbl.string("description", 255);

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("project_resources", tbl => {
      tbl.primary(["project_id", "resource_id"]);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};
