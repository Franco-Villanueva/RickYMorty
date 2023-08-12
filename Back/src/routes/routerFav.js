const express = require('express');
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const routerFav = express.Router();

routerFav.post('/', postFav);
routerFav.delete('/:id', deleteFav);

module.exports = routerFav;