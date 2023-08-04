import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {

    const [character,setCharacter]= useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/onsearch/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } 
        }).catch((err)=>alert(err))
        return ()=> setCharacter({});
     }, [id]);

 return (
    <div>
       <h2>{character.name}</h2>
       <h2>{character.species} </h2>
       <h2>{character.status} </h2>
       <h2>{character.gender} </h2>
       <h2>{character.origin?.name} </h2>
       <img src={character.image} alt={character.name} />
    </div>
 );
}