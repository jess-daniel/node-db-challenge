exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Super Project", description: "really cool" }
      ]);
    });
};
