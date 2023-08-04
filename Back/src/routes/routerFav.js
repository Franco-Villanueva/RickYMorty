const express = require('express');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const routerFav = express.Router();

routerFav.post('/', postFav);
routerFav.delete('/:id', deleteFav);

module.exports = routerFav;