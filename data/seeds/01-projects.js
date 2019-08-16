
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {task_id: 1, name: 'rowValue1',description:'hello',completed:1,resource_id:1}
       
      ]);
    });
};
