
import { ACCESS, ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters:[],
  access:false
};
// Crea un nuevo caso con el nombre "ORDER". Aquí vamos a ordenar nuestros personajes favoritos de forma ascendente y descendente. Para esto:

// Crea una copia de tu estado global allCharacters.
// Utiliza el método sort para ordenar tus personajes de acuerdo a su id.
// Si el payload es igual a "A", los personajes deben ordenarse de menor a mayor.
// Si el payload es igual a "D, los personajes deben ordenarse de mayor a menor.
// Finalmente retorna tu estado global y en la propiedad myFavorites guarda el ordenamiento que hiciste.
// [NOTA]: investiga en la web cómo funciona el método sort.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //   const copy = [...state.allCharacters, action.payload]
    //   return {
    //     ...state,
    //     myFavorites: copy,
    //     allCharacters:[...copy]
    //   };
    case ADD_FAV:
      return { 
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload };
    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload),
    //     allCharacters: state.allCharacters.filter((fav) => fav.id !== action.payload),
    //   };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case FILTER:
      if(action.payload==='All'){return {...state,myFavorites:state.allCharacters}}
      return{
        ...state,
        myFavorites:state.allCharacters.filter((character) =>character.gender===action.payload),
      }
    case ORDER:
        if (action.payload === 'A') {
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort(function(a, b) {
              return a.id - b.id;
            }),
          };
        } else {
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort(function(a, b) {
              return a.id - b.id;
            }).reverse(),
          };
        }
    case ACCESS:{
      return{
        ...state,
        access:!state.access
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
