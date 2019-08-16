exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").truncate().then(function() {
    // Inserts seed entries
    return knex("tasks").insert([
      {
        description: "task description",
        notes: "the task notes",
        completed: 0
      }
    ]);
  });
};
