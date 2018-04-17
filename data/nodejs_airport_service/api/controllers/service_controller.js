'use strict';

var mysqlModel = require('mysql-model'),
    MyAppModel = mysqlModel.createConnection({
  host     : 'mysql_service_db',
  port     : '3306',
  user     : 'mysql_php',
  password : 'mysql_php',
  database : 'micro_php'
});

var Airport = MyAppModel.extend({
  tableName: "cmn_airports",
});

// Airport

exports.list_all_airports = function(req, res) {
  var airport = new Airport();
  airport.find('all', function(err, row, fields) {
    if (err)
      res.send(err);
    res.json(row);
  });
};

exports.read_a_airport = function(req, res) {
  var airport = new Airport();
  airport.read(req.params.id, function(err, airport) {
    if (err)
      res.send(err);
    res.json(airport);
  });
};

exports.delete_a_airport = function(req, res) {
  var airport = new Airport();
  airport.set('id', req.params.id);
  airport.remove(function(err, airport) {
    if (err)
      res.send(err);
    res.json({ message: 'Airport successfully deleted' });
  });
};
