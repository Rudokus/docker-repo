
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;

var AircraftSchema = new Schema({
  type: {
    type: String,
    required: 'Kindly enter the type of the airplane'
  },
  company: {
    type: String,
    required: 'Kindly enter the company of the airplane'
  },
  info: {
    type: String,
    required: 'Kindly enter the info of the airplane'
  }
});

AircraftSchema.plugin(autoincrement, {field: 'aircraft_id' /*with field name*/});

module.exports = mongoose.model('Aircraft', AircraftSchema);
