axios = require('axios');
require('dotenv').config();
const {URL_API}= process.env;

function getCharById(req,res){
    const {id} = req.params
    axios(URL_API+id).then(({data})=>{
        if(data.error){
            return res.status(404).send('Not found')
        }
        const character = {
            id:Number(id),
            status:data.status,
            name:data.name,
            species:data.species,
            origin:data.origin,
            image:data.image,
            gender:data.gender
        }
        return res.json(character)

    }).catch((err)=> res.status(404).send('Not found'))
}

module.exports = {
    getCharById
}