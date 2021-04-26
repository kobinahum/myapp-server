const mongoose = require('mongoose');
const Message = require('../db/models/message.model');
require('../db/models/user.model');

function newMessage(body) {
    const { message, user, userId } = body;
    const newMessage = new Message({ message, user, userId, timestamp: new Date(), _id: mongoose.Types.ObjectId() })
    newMessage.save();
    return newMessage;
}

async function getAll() {
    // here we should implemetd populate by userID and remove user field from model
    return await Message.find().sort({ timestamp: 1 });
}

module.exports = {
    getAll: getAll,
    newMessage: newMessage
};