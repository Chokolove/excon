const mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: String,
    dni: Number,
    cell: Number,
    email: String,
    direction: String,
    department: String,
    province: String,
    district: String,
    comment: String
  });

  module.exports = mongoose.model('Person', personSchema);