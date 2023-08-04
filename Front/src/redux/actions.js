import axios from 'axios'

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER ='ORDER'
export const ACCESS = 'ACCESS'


export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/favorites';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/favorites/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export function filterCards(gender){
    return{
        type:'FILTER',
        payload: gender
    }
}

export function orderCards(order){
    return{
        type:'ORDER',
        payload: order,
    }

}

export function accessing(){
    return{
        type:'ACCESS'
    }
}


