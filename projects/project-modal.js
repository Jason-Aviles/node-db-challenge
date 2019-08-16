const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  find,
findTasks,findCombined,findResources,add,addResources,addTasks
};

function find() {
  return db("projects")


}

function findResources() {
  return db("resources")


}

function findTasks() {
  return db("tasks")


}


function addResources(item) {
  return db("resources ")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}



function add(item) {
  return db("projects ")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}


function addTasks(item) {
  return db("tasks ")
    .insert(item)
    .then(ids => ({ id: ids[0] }));
}





function findCombined(id) {
  return db.select(['tasks.notes', 'projects.name', 'projects.description', 'projects.id'])
      .from('projects')
  .leftJoin('tasks', { 'projects.task_id': 'tasks.id' })
      .where({ 'tasks.id': Number(id) })
    
      .groupBy('projects.id','projects.name')
}