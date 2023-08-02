export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER ='ORDER'
export const ACCESS = 'ACCESS'


export function addFav(character){
    return{
        type:'ADD_FAV',
        payload: character
    }
}

export function removeFav(id){
    return{
        type:'REMOVE_FAV',
        payload: id
    }
}

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


