// const http = require('http');
// const {getCharById} = require('./controllers/getCharById');
// require('dotenv').config();
// const {PORT,PASSWORD}= process.env;

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes('onsearch')){
//         const id = req.url.split('/').pop()
//         //const character = any()
//         //res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify({msg:'OK',character:character}))
//         return getCharById(res,id)
//     }
//     if(req.url.includes('detail')){
//         const id = req.url.split('/').pop()
//         return getCharById(res,id)
//     }

// }).listen(PORT,()=>{
//     console.log('Running OK on '+PORT);
// })

const express = require('express');
const routeOnsearch = require('./routes/routerOnSearch');
const routeLogin = require('./routes/routerLogin');
const routeFav = require('./routes/routerFav');
const server = express();
const cors = require('cors')
// require('dotenv').config();
// const { PORT } = process.env;

server.use(cors())
server.use(express.json())
// server.use((req, res, next) => {
//    req.url =   req.url +'/rickandmorty';
//    next();
//  });

server.use('/rickandmorty/onsearch', routeOnsearch)
server.use('/rickandmorty/user',routeLogin)
server.use('/rickandmorty/favorites', routeFav);


module.exports = {server};
// server.listen(PORT, () => {
//   console.log('Server raised in port: ' + PORT);
// });