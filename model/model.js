const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true,
  },
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
