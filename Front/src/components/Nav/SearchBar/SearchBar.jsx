import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch, random}) {

   const [id,setId]= useState('')

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   return (
      <div className={styles.divBtns}>
         <input placeholder="Ingresa un ID" className={styles.inputSearch} value={id} onChange={handleChange} type='search' />
         <button className={styles.btn} onClick={()=>onSearch(id)}>Add</button>
         <button className={styles.btn} onClick={()=>random()} type='search'>Random</button>
      </div>
   );
}
