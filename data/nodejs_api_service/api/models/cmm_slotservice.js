
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SlotServiceSchema = new Schema({
  slot_service_id: {
    type: String,
    required: 'Kindly enter the name of the Slot Service'
  },
  airport_id: {
    type: Number,
    required: 'Kindly enter the name of the Slot Service'
  },
  airport_arrival_id: {
    type: Number,
    required: 'Kindly enter the name of the Slot Service'
  },
  airport_aircraft_id: {
    type: Number,
    required: 'Kindly enter the name of the Slot Service'
  },
  departure_date: {
    type: Date
  },
  arrival_date: {
    type: Date
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  staffs: [{
    type: Schema.Types.ObjectId,
    ref: 'Staff'
  }],
  ground_staffs: [{
    type: Schema.Types.ObjectId,
    ref: 'GroundStaff'
  }],
  fuel_services: [{
    type: Schema.Types.ObjectId,
    ref: 'FuelService'
  }],
  emergency_services: [{
    type: Schema.Types.ObjectId,
    ref: 'EmergencyService'
  }]
});

module.exports = mongoose.model('SlotService', SlotServiceSchema);
