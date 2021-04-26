const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    userId: String,
    _id: String,
    message: String,
    timestamp: Date,
  });

 const Log = mongoose.model('Log', logSchema); 

 module.exports = Log;