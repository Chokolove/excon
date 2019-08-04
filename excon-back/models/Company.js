const mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    name: String,
    cell: Number,
    email: String,
    reason: String,
    ruc: String,
    direction: String,
    department: String,
    province: String,
    district: String,
    comment: String
  });

  module.exports = mongoose.model('Company', companySchema);