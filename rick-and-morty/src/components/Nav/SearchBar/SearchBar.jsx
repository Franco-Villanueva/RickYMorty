import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id,setId]= useState('')

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   return (
      <div>
         <input value={id} onChange={handleChange} type='search' />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
