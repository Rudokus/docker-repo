'use strict';
module.exports = function(app) {
  var serviceController = require('../controllers/service_controller');
  
  // Routes
  app.route('/aircraft')
      .get(serviceController.list_all_aircrafts)
      .post(serviceController.create_a_aircraft);
  
  app.route('/aircraft/:id')
      .get(serviceController.read_a_aircraft)
      .put(serviceController.update_a_aircraft)
      .delete(serviceController.delete_a_aircraft);
  
  app.route('/airport')
      .get(serviceController.list_all_airports)
      .post(serviceController.create_a_airport);
  
  app.route('/airport/:id')
      .get(serviceController.read_a_airport)
      .put(serviceController.update_a_airport)
      .delete(serviceController.delete_a_airport);
  
  app.route('/emergencyservice')
      .post(serviceController.create_a_emergency_service);
  
  app.route('/emergencyservice/:id')
      .get(serviceController.read_a_emergency_service)
      .put(serviceController.update_a_emergency_service)
      .delete(serviceController.delete_a_emergency_service);
  
  app.route('/fuelservice')
      .post(serviceController.create_a_fuel_service);
  
  app.route('/fuelservice/:id')
      .get(serviceController.read_a_fuel_service)
      .put(serviceController.update_a_fuel_service)
      .delete(serviceController.delete_a_fuel_service);
  
  app.route('/groundstaff')
      .post(serviceController.create_a_ground_staff);
  
  app.route('/groundstaff/:id')
      .get(serviceController.read_a_ground_staff)
      .put(serviceController.update_a_ground_staff)
      .delete(serviceController.delete_a_ground_staff);
  
  app.route('/staff')
      .post(serviceController.create_a_staff);
  
  app.route('/staff/:id')
      .get(serviceController.read_a_staff)
      .put(serviceController.update_a_staff)
      .delete(serviceController.delete_a_staff);
  
  app.route('/slotservice')
      .get(serviceController.list_all_flights)
      .post(serviceController.create_a_flight_service);
  
  app.route('/slotservice/:id')
      .get(serviceController.read_a_flight_service);
};
