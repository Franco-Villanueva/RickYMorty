import { Link, useLocation } from "react-router-dom";
import styles from './Card.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from "react";
import { addFav,removeFav } from "../../../redux/actions";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
      const location = useLocation()
      const dispatch = useDispatch()

      const myFavorites = useSelector(state=>state.myFavorites)

      const [isFav,setIsFav]= useState(false)



      const handleFavorite = (id)=>{
         if(isFav){
            setIsFav(false)
            dispatch(removeFav(id))
         }else{
            setIsFav(true)
            dispatch(addFav({id,name,status,species,gender,origin,image}))
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites,id]);

   return (
      <div>
         <button className={styles.btnFav} onClick={()=>handleFavorite(id)}>{isFav ? '❤️' : '🤍'}</button>
         {location.pathname !== "/favorites" && ( // Condición para mostrar el botón "X" (cierre) si no estamos en la vista de favoritos
        <button className={styles.close} onClick={() => onClose(id)}>
          X
        </button>
      )}
         <div className={styles.divContenedor} >

            <Link to={`/detail/${id}`}><img className={styles.img} src={image} alt={name} width='200px' height='200px' /></Link>
         
            <Link className={styles.name} to={`/detail/${id}`}><h2>{name}</h2></Link>
         </div>
      </div>
   );
}

