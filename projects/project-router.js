const express = require('express');

const Projects = require('./project-modal');

const router = express.Router();



router.get('/projects', async (req, res) => {
return Projects.find().then(data => res.json(data))


});


router.get('/resources', async (req, res) => {
  return Projects.findResources().then(data => res.json(data))
  
  
  });
  
router.get('/tasks', async (req, res) => {
  return Projects.findTasks().then(data => res.json(data))
  
  
  });
  
  




  router.post('/projects', async (req, res) => {
    return Projects.add(req.body).then(data => res.json(data))
    
    
    });
    
    
    router.post('/resources', async (req, res) => {
      return Projects.addResources(req.body).then(data => res.json(data))
      
      
      });
      
    router.post('/tasks', async (req, res) => {
      console.log(req.body)
      return Projects.addTasks(req.body).then(data => res.json(data))
      
      
      });
      








router.get('/:id/all', async (req, res) => {
  const { id } = req.params;
return  Projects.findCombined(id).then(data => res.json(data))

});




module.exports = router;