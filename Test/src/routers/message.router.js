const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Log = require('../db/models/log.model');
const User = require('../db/models/user.model');
const controller = require('../controller/message.controller');

router.post('/', async function (req, res, next) {
    // a middleware for logging messages
    const { user, message } = req.body;
    const log = new Log({ _id: mongoose.Types.ObjectId(), user, message });
    log.save();
    next();
}, async function (req, res, next) {
    // a middleware for logging messages
    const { user } = req.body;
    const dbUser = await User.findOne({ name: user });
    req.body.userId = dbUser?._id;
    next();
}

    , async function (req, res) {
        await controller.newMessage(req.body);
        res.send({ message: 'OK' });
    })
// define the about route
router.get('/', async function async(req, res) {
    const messages = await controller.getAll();
    res.send(messages);
})

module.exports = router

