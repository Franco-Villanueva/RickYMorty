const http = require('http');
const data = require('./utils/data')
require('dotenv').config();
const {PORT,PASSWORD}= process.env;

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').pop();
        const character = data.find((pj) => pj.id === Number(id) )
        if(character){
            return res
            .writeHead(200, {'Content-Type': 'application/json'})
            .end(JSON.stringify({msg:'OK',character:character}))
        }else{
            return res
            .writeHead(404, {'Content-Type': 'application/json'})
            .end(JSON.stringify({msg:'Not Found',error:`The character with the id ${id} was not found`}))
        }
        
    }

}).listen(PORT,()=>{
    console.log('Running OK on '+PORT);
})