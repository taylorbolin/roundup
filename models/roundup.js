var mongoose = require('mongoose');

var RoundUpSchema = new mongoose.Schema({
  group: String,
  friends: Array
});

module.exports = mongoose.model('RoundUp', RoundUpSchema);