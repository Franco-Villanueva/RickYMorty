const express = require('express');
const { login } = require('../controllers/login');
const routerLogin = express.Router();

routerLogin.get('/login', login);

module.exports = routerLogin;