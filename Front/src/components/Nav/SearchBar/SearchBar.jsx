import { useState } from "react";
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({onSearch, random}) {

   const [id,setId]= useState('')

   const handleChange = (event)=>{
      setId(event.target.value)
   }
   const handleAdd = () => {
      onSearch(id);
      setId(''); // Limpiar el valor del input
   }


   return (
      <div className={styles.divBtns}>
         <input placeholder="Enter ID" className={styles.inputSearch} value={id} onChange={handleChange} type='search' />

         <button className={styles.btnSearch} onClick={()=>handleAdd()}>
            <FontAwesomeIcon icon={faSearch} />
         </button>

         <button className={styles.btn} onClick={()=>random()} type='search'>Random</button>
         
      </div>
   );
}
