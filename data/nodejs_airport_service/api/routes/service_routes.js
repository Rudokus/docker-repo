'use strict';
module.exports = function(app) {
  var serviceController = require('../controllers/service_controller');
  
  // Routes
  app.route('/airport')
      .get(serviceController.list_all_airports);
  
  app.route('/airport/:id')
      .get(serviceController.read_a_airport)
      .delete(serviceController.delete_a_airport);
 
};
