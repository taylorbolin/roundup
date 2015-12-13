var express = require('express');
var Airplane = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Airplane.find(function(err, airplanes) {
      if (err) return res.status(500).send(err);
      res.send(airplanes);
    });
  })
  .post(function(req, res) {
    Airplane.create(req.body, function(err, airplane) {
      if (err) return res.status(500).send(err);
      res.send(airplane);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Airplane.findById(req.params.id, function(err, airplane) {
      if (err) return res.status(500).send(err);
      res.send(airplane);
    });
  })
  .put(function(req, res) {
    Airplane.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Airplane.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;