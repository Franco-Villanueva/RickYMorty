import React, { useState } from "react";
import {  useSelector,useDispatch } from "react-redux";
import Card from "../Cards/Card/Card";
import styles from './Favorites.module.css'
import { Link } from "react-router-dom";
import { filterCards,orderCards } from "../../redux/actions";


export default function Favorites() {

    const [aux,setAux]= useState(false)

    const myFavorites = useSelector(state=>state.myFavorites)
    const dispatch = useDispatch()

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }


    return (
        <>
            <h1 className={styles.title}>My Favorites</h1>
            <select onChange={handleOrder}>
                <option disabled selected hidden></option>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <Link to='/home'><button className={styles.buttonBack}>⇚ Volver</button></Link>

            <div className={styles.divContenedor}>
                {
                    myFavorites.map((fav) => {
                        return (
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                status={fav.status}
                                species={fav.species}
                                gender={fav.gender}
                                origin={fav.origin.name}
                                image={fav.image}
                            />)
                            })
                }
            </ div>
        </>
    )
}
