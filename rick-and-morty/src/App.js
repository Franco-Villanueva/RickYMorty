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

function App() {

   const location = useLocation()
   const navigate = useNavigate()
   const [characters,setCharacters]= useState([]);
   const [access,setAccess]=useState(false);

   const EMAIL = 'franco@gmail.com';
   const PASSWORD = 'messi123';

  
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logOut(){
      setAccess(false)
   }

   useEffect(() => {
   !access && navigate('/');
   }, [access, navigate]);


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
         {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut} /> }
        
        <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' element={<About />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path='/' element={<Form login={login} />} />

         </Routes>
      </div>
   );
}

export default App;
