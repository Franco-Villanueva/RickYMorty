import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Route,Routes} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App() {
   const [characters,setCharacters]= useState([]);

   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters(characters.filter(char =>char.id!==id))
   }

   return (
      <div className='App'>
        <Nav onSearch={onSearch} />
        <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail />} />

         </Routes>
      </div>
   );
}

export default App;
