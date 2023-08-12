const {Character} = require('../DB_connection')

const postFav = async(req, res)=>{
    try {
        const { id , name, origin, status, image, species, gender} = req.body;

        if(!id || !name|| !origin|| !status|| !image|| !species|| !gender) return res.status(401).send('Faltan datos');

        await Character.findOrCreate({where:{id , name, origin, status, image, species, gender}});

        const favorites = await Character.findAll();

        return  res.status(200).json(favorites)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = postFav;