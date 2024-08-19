const express = require('express');
const AuthController = require('../controllers/AuthController');
const AuthRotas = express.Router();

const authController = new AuthController();

AuthRotas.post('/login', authController.login);

module.exports = AuthRotas;
