'use strict';


var mongoose = require('mongoose'),
    Aircraft = mongoose.model('Aircraft'),
    Airport = mongoose.model('Airport'),
    EmergencyService = mongoose.model('EmergencyService'),
    FuelService = mongoose.model('FuelService'),
    GroundStaff = mongoose.model('GroundStaff'),
    Staff = mongoose.model('Staff'),
    SlotService = mongoose.model('SlotService');

// Aircraft

exports.list_all_aircrafts = function(req, res) {
  Aircraft.find({}, function(err, aircrafts) {
    if (err)
      res.send(err);
    res.json(aircrafts);
  });
};

exports.create_a_aircraft = function(req, res) {
  var new_aircraft = new Aircraft(req.body);
  new_aircraft.save(function(err, aircraft) {
    if (err)
      res.send(err);
    res.json(aircraft);
  });
};

exports.read_a_aircraft = function(req, res) {
  Aircraft.findOne({aircraft_id: req.params.id}, function(err, aircraft) {
    if (err)
      res.send(err);
    res.json(aircraft);
  });
};

exports.update_a_aircraft = function(req, res) {
  Aircraft.findOneAndUpdate({aircraft_id: req.params.id}, req.body, {new: true}, function(err, aircraft) {
    if (err)
      res.send(err);
    res.json(aircraft);
  });
};

exports.delete_a_aircraft = function(req, res) {
  Aircraft.remove({
    aircraft_id: req.params.id
  }, function(err, aircraft) {
    if (err)
      res.send(err);
    res.json({ message: 'Aircraft successfully deleted' });
  });
};

// Airport

exports.list_all_airports = function(req, res) {
  Airport.find({}, function(err, airports) {
    if (err)
      res.send(err);
    res.json(airports);
  });
};

exports.create_a_airport = function(req, res) {
  var new_airport = new Airport(req.body);
  new_airport.save(function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.read_a_airport = function(req, res) {
  Airport.findOne({airport_id: req.params.id}, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.update_a_airport = function(req, res) {
  Airport.findOneAndUpdate({airport_id: req.params.id}, req.body, {new: true}, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.delete_a_airport = function(req, res) {
  Airport.remove({
    airport_id: req.params.id
  }, function(err, airport) {
    if (err)
      res.send(err);
    res.json({ message: 'Airport successfully deleted' });
  });
};

// EmergencyService

exports.create_a_emergency_service = function(req, res) {
  var new_emergency_service = new EmergencyService(req.body);
  new_emergency_service.save(function(err, emergency_service) {
    if (err)
      res.send(err);
    res.json(emergency_service);
  });
};

exports.read_a_emergency_service = function(req, res) {
  EmergencyService.findOne({emergency_service_id: req.params.id}, function(err, emergency_service) {
    if (err)
      res.send(err);
    res.json(emergency_service);
  });
};

exports.update_a_emergency_service = function(req, res) {
  EmergencyService.findOneAndUpdate({emergency_service_id: req.params.id}, req.body, {new: true}, function(err, emergency_service) {
    if (err)
      res.send(err);
    res.json(emergency_service);
  });
};

exports.delete_a_emergency_service = function(req, res) {
  EmergencyService.remove({
    emergency_service_id: req.params.id
  }, function(err, emergency_service) {
    if (err)
      res.send(err);
    res.json({ message: 'emergency_service successfully deleted' });
  });
};

// FuelService

exports.create_a_fuel_service = function(req, res) {
  var new_fuel_service = new FuelService(req.body);
  new_fuel_service.save(function(err, fuel_service) {
    if (err)
      res.send(err);
    res.json(fuel_service);
  });
};

exports.read_a_fuel_service = function(req, res) {
  FuelService.findOne({fuel_service_id: req.params.id}, function(err, fuel_service) {
    if (err)
      res.send(err);
    res.json(fuel_service);
  });
};

exports.update_a_fuel_service = function(req, res) {
  FuelService.findOneAndUpdate({fuel_service_id: req.params.id}, req.body, {new: true}, function(err, fuel_service) {
    if (err)
      res.send(err);
    res.json(fuel_service);
  });
};

exports.delete_a_fuel_service = function(req, res) {
  FuelService.remove({
    fuel_service_id: req.params.id
  }, function(err, fuel_service) {
    if (err)
      res.send(err);
    res.json({ message: 'fuel_service successfully deleted' });
  });
};

// GroundStaff

exports.create_a_ground_staff = function(req, res) {
  var new_ground_staff = new GroundStaff(req.body);
  new_ground_staff.save(function(err, ground_staff) {
    if (err)
      res.send(err);
    res.json(ground_staff);
  });
};

exports.read_a_ground_staff = function(req, res) {
  GroundStaff.findOne({groundstaff_id: req.params.id}, function(err, ground_staff) {
    if (err)
      res.send(err);
    res.json(ground_staff);
  });
};

exports.update_a_ground_staff = function(req, res) {
  GroundStaff.findOneAndUpdate({groundstaff_id: req.params.id}, req.body, {new: true}, function(err, ground_staff) {
    if (err)
      res.send(err);
    res.json(ground_staff);
  });
};

exports.delete_a_ground_staff = function(req, res) {
  GroundStaff.remove({
    groundstaff_id: req.params.id
  }, function(err, ground_staff) {
    if (err)
      res.send(err);
    res.json({ message: 'ground_staff successfully deleted' });
  });
};

// Staff

exports.create_a_staff = function(req, res) {
  var new_staff = new Staff(req.body);
  new_staff.save(function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff);
  });
};

exports.read_a_staff = function(req, res) {
  Staff.findOne({staff_id: req.params.id}, function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff);
  });
};

exports.update_a_staff = function(req, res) {
  Staff.findOneAndUpdate({staff_id: req.params.id}, req.body, {new: true}, function(err, staff) {
    if (err)
      res.send(err);
    res.json(staff);
  });
};

exports.delete_a_staff = function(req, res) {
  Staff.remove({
    staff_id: req.params.id
  }, function(err, staff) {
    if (err)
      res.send(err);
    res.json({ message: 'staff successfully deleted' });
  });
};

// SlotService

exports.list_all_flights = function(req, res) {
  SlotService.find({}, function(err, flights) {
    if (err)
      res.send(err);
    res.json(flights);
  });
};

exports.create_a_flight_service = function(req, res) {
  var new_airport = new SlotService(req.body);
  new_airport.save(function(err, new_airport) {
    if (err) {
      res.send(err);
    }
    
    res.json(new_airport);
  });
};

exports.read_a_flight_service = function(req, res) {
  SlotService.findOne({slot_service_id: req.params.id}, function(err, flight_service) {
    if (err)
      res.send(err);
    res.json(flight_service);
  });
};
