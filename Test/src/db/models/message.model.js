const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String,
    timestamp: Date,
    message: String,
    _id: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  });

 const Message = mongoose.model('Message', messageSchema); 

 module.exports = Message;