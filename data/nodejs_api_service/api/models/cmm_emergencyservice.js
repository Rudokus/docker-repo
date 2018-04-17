
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;


var EmergencyServiceSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Employee'
  },
  company: {
    type: String,
    required: 'Kindly enter the company of the Employee'
  },
  function: {
    type: String,
    required: 'Kindly enter the function of the Employee'
  }
});

EmergencyServiceSchema.plugin(autoincrement, {field: 'emergency_service_id' /*with field name*/});

module.exports = mongoose.model('EmergencyService', EmergencyServiceSchema);
