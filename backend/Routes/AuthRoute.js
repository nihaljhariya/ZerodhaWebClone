const { Signup, Login } = require('../Controllers/AuthController')
const router = require('express').Router()
const express = require('express');
const {userVerification} = require("../Middlewares/AuthMiddleware");

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)

module.exports = router