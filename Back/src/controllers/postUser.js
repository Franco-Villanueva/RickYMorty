const { User } = require=('../DB_connection.js');

const postUser = async(req, res)=>{

    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).send('Falta enviar datos obligatorios')
    }
    try {
        const newUser = await User.findOrCreate({where:{email,password}})
        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}

module.exports = postUser;