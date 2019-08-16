exports.up = function(knex) {
  return knex.schema

    .createTable(`resources`, tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text(" description", 128);
    })
    .createTable(`tasks`, tbl => {
      tbl.increments();
      tbl.text(" description", 128).notNullable();
      tbl.text(" notes", 128);

      tbl.integer("completed");
    })

    .createTable("projects", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text(" description", 128);
      tbl.integer("completed");

      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("task")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .index();
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .index();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
