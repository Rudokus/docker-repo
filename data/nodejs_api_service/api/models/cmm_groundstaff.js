
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;

var GroundStaffSchema = new Schema({
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

GroundStaffSchema.plugin(autoincrement, {field: 'groundstaff_id' /*with field name*/});

module.exports = mongoose.model('GroundStaff', GroundStaffSchema);
