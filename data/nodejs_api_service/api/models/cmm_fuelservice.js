
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;


var FuelServiceSchema = new Schema({
  company: {
    type: String,
    required: 'Kindly enter the company of the Fuel Service'
  },
  fuel_type: {
    type: String,
    required: 'Kindly enter the fuel type of the Fuel Service'
  },
  amount: {
    type: String,
    required: 'Kindly enter the amount of the Fuel Service'
  },
  confirmed: {
    type: String,
    required: 'Kindly enter the confirmed of the Fuel Service'
  },
  staff_persons: {
    type: Number,
    required: 'Kindly enter the staff persons of the Fuel Service'
  },
});

FuelServiceSchema.plugin(autoincrement, {field: 'fuel_service_id' /*with field name*/});

module.exports = mongoose.model('FuelService', FuelServiceSchema);
