
'use strict';
var mongoose = require('mongoose');
var autoincrement = require('simple-mongoose-autoincrement');
var Schema = mongoose.Schema;

var AirportSchema = new Schema({
  iata_code: {
    type: String,
    uppercase: true,
    required: 'Kindly enter the IATA Code of the Airport'
  },
  icao_code: {
    type: String,
    uppercase: true,
    required: 'Kindly enter the ICAO Code of the Airport'
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the Airport'
  },
  city: {
    type: String,
    required: 'Kindly enter the city of the Airport'
  }
});

AirportSchema.plugin(autoincrement, {field: 'airport_id' /*with field name*/});

module.exports = mongoose.model('Airport', AirportSchema);
