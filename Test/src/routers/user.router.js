const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const controller = require('../controller/users.controller');


router.get('/', async function async(req, res) {
    const users = await controller.getAll();
    res.send(users);
})

module.exports = router;

