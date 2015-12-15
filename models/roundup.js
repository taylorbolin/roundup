var mongoose = require('mongoose');

var RoundUpSchema = new mongoose.Schema({
  group: String,
  friends: [{newPerson: String}]
});

module.exports = mongoose.model('RoundUp', RoundUpSchema);