
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;

var StaffSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Employee'
  },
  function: {
    type: String,
    required: 'Kindly enter the function of the Employee'
  },
  gender: {
    type: [{
      type: String,
      enum: ['Men', 'Women', 'NA']
    }],
    default: ['NA'],
    required: 'Kindly enter the company of the Employee'
  }
});

StaffSchema.plugin(autoincrement, {field: 'staff_id' /*with field name*/});

module.exports = mongoose.model('Staff', StaffSchema);
