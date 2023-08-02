import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route,Routes} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useLocation,useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { accessing } from './redux/actions';

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   
   const [characters,setCharacters]= useState([]);
   const access = useSelector(state=>state.access)
   const dispatch = useDispatch()

  
   const EMAIL = 'franco@gmail.com';
   const PASSWORD = 'messi123';
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         dispatch(accessing())
         navigate('/home');
      }
   }
   function logOut(){
      dispatch(accessing())
   }
   useEffect(() => {
   !access && navigate('/');
   }, [access, navigate]);


   function onSearch(id) {
      if(id>826){
         return alert('Max 126')
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.character.name) {
      // Verificar si el personaje ya está en el estado
      const verifCharacter = characters.find((character) => character.id === data.character.id);
      
         if (!verifCharacter) { setCharacters((oldChars) => [...oldChars, data.character]);}

         else {window.alert('¡El personaje ya fue agregado!');}
      }
      }).catch((err)=>alert(err.response.data.error))
   }

   function random() {
      let numRandom = Math.floor(Math.random() * (826)) + 1;
      axios(`http://localhost:3001/rickandmorty/character/${numRandom}`).then(({ data }) => {
        if (data.character.name) {
          // Verificar si el personaje ya está en el estado
          const isCharacterAlreadyAdded = characters.find((character) => character.id === data.character.id);
          
          if (!isCharacterAlreadyAdded) {
            setCharacters((oldChars) => [...oldChars, data.character]);
          } else {
            // Si ya está en el estado, realizar otra búsqueda para obtener un personaje diferente
            random();
          }
        }
      }).catch((err)=>alert(err.response.data.error))
    }

   function onClose(id){
      setCharacters(characters.filter(char =>char.id!==id))
   }

   return (
      <div className='App'>
         {location.pathname !== '/' &&  location.pathname !== '/favorites' && <Nav onSearch={onSearch} logOut={logOut} random={random} /> }
        
        <Routes>
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path='/' element={<Form login={login} />} />

         </Routes>
      </div>
   );
}

export default App;
