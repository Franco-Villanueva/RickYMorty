import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";


export default function Nav({onSearch, logOut}){
    return (
        <div>
          <Link to='/about'><button>About</button></Link>
          <Link to='/home'><button>Home</button></Link>
          <Link to='/'><button onClick={()=>logOut}>LogOut</button></Link>
          <SearchBar onSearch={onSearch} />
        </div>
      );
}