const { Character } = require("../DB_connection")

const deleteFav = async(req, res)=>{
    try {
        const {id} = req.params;

        await Character.destroy({where:{id}})

        const favorites = await Character.findAll();
        return res.status(200).json(favorites)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports= deleteFav;