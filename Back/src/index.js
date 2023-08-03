const http = require('http');
const {getCharById} = require('./controllers/getCharById');
require('dotenv').config();
const {PORT,PASSWORD}= process.env;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('onsearch')){
        const id = req.url.split('/').pop()
        //const character = any()
        //res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify({msg:'OK',character:character}))
        return getCharById(res,id)
    }
    if(req.url.includes('detail')){
        const id = req.url.split('/').pop()
        return getCharById(res,id)
    }

}).listen(PORT,()=>{
    console.log('Running OK on '+PORT);
})