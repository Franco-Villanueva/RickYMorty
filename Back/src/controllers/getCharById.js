axios = require('axios');

function getCharById(res,id){
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
        const character = {
            id:id,
            name:data.name,
            species:data.species,
            gender:data.gender,
            image:data.image,
            origin:data.origin,
            status:data.status
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(character))

    }).catch((err)=> {res.writeHead(404, {'Content-Type': 'text/plain'}); res.end(err.message)})
}

module.exports = {
    getCharById
}