let myFavorites = [];

function postFav(req,res){
    myFavorites.push(req.body);

    return res.json(myFavorites)
}

function deleteFav(req,res){
    const {id} = req.params;
    myFavorites = myFavorites.filter((character)=>character.id !== Number(id))
    res.json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}