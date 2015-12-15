var express = require('express');
var RoundUp = require('../models/roundup');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    RoundUp.find(function(err, roundups) {
      if (err) return res.status(500).send(err);
      res.send(roundups);
    });
  })
  .post(function(req, res) {
    RoundUp.create(req.body, function(err, roundup) {
      if (err) return res.status(500).send(err);
      res.send(roundup);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    RoundUp.findById(req.params.id, function(err, roundup) {
      if (err) return res.status(500).send(err);
      res.send(roundup);
    });
  })
  .put(function(req, res) {
    RoundUp.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    RoundUp.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;