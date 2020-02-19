// Load the 'students' controller
const controller = require("../../app/controllers/tasks.server.controller");

// Define the routes module' method
module.exports = function(app) {

   app.get('/tasks', controller.listAll);

   app.route('/tasks/:id')
      .get(controller.detailsGet)
      .put(controller.updatePost)
      .delete(controller.deletePost);

   app.route('/tasks/create')
      .get(controller.createGet)
      .post(controller.createPost);

};
