const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  _id: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;