const express = require('express');
const { getCharById } = require('../controllers/getCharById');
const routerOnsearch = express.Router();

routerOnsearch.get('/:id', getCharById);

module.exports = routerOnsearch;