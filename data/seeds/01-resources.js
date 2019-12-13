exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "money", description: "buy other resources" }
      ]);
    });
};
