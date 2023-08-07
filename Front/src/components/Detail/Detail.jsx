import React from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'
import imgArma from '../../imgs/pngegg.png'
import imgMorty from '../../imgs/pngegg1.png';
import imgRickPepino from '../../imgs/pngegg3.png';
import imgNave from '../../imgs/pngegg4.png';


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
   <div className={styles.divContainer}>
      <img className={styles.flying} src="https://assets.stickpng.com/thumbs/58f37709a4fa116215a9240d.png" width={'200px'} height={'200px'} alt="" />
      <img className={styles.flying} src={imgArma} width={'100px'} height={'100px'} alt="armaportal" />
      <img className={styles.flying} src={imgMorty} width={'150px'} height={'150px'} alt="morty" />
      <img className={styles.flying} src={imgRickPepino} width={'80px'} height={'130px'} alt="RickPepino" />
      <img className={styles.flying} src={imgNave} width={'200px'} height={'120px'} alt="RickPepino" />
      <Link to='/home'><button className={styles.buttonBack}>⇚ Volver</button></Link>
      <h1 className={styles.h1}>Character details</h1>
      <div className={styles.divGeneral}>
         
         <div className={styles.divH}>
            <h2 className={styles.h2}>{character.name}</h2>
            
            <div className={styles.divDecorative}></div>
            <h3>Specie: {character.species} </h3>
            <div className={styles.divDecorative}></div>
            <h3>Status: {character.status} </h3>
            <div className={styles.divDecorative}></div>
            <h3>Gender: {character.gender} </h3>
            <div className={styles.divDecorative}></div>
            <h3>Origin: {character.origin?.name} </h3>
         </div>
         <div >
         <img  className={styles.img} src={character.image} alt={character.name} />
         </div>
      </div>
    </div>
 );
}