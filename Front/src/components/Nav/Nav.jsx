import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import imgLogo from '../../imgs/Rick-And-Morty-Logo-Transparent-File.png'


export default function Nav({onSearch, logOut, random}){
    return (<div>
        <div className={styles.Navig}>

          <Link to='/home'><img className={styles.img} src={imgLogo} alt="rickandmorty" /></Link>

          <div className={styles.divBtns}>
              <Link to='/home'><button className={styles.btnHome} >Home</button></Link>
              <Link to='/favorites'><button className={styles.btnFav} >Favorites</button></Link>
              <Link to='/about'><button className={styles.btnAbout} >About</button></Link>
              <Link to='/'><button className={styles.btnRed} onClick={()=>logOut}>LogOut</button></Link>
          </div>
          <SearchBar onSearch={onSearch} random={random} />
        </div>
        <div className={styles.divDeco}>
        </div>
        </div>
      );
}