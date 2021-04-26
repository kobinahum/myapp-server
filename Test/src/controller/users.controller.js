const User = require('../db/models/user.model');
const mongoose = require('mongoose');


async function getAll() {
    return await User.find().sort({ _id: -1 });
}

module.exports = {
    getAll: getAll
};