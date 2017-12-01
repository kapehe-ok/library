import axios from "axios";

let initialState = {
    user: '',
    books: []
}

const GET_BOOKS= "GET_BOOKS";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

export function getBooks() {
    const promise = axios.get('/api/books')
    .then(res => {
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: promise
    }
}
export function login( obj, history ) {
    return {
      type: LOGIN,
      payload: axios.post( URL.login, obj ).then( response => {
        history.push('/');
        return response.data;
      })
    };
  }
  
  export function register( obj, history ) {
    return {
      type: REGISTER,
      payload: axios.post( URL.register, obj ).then( response => {
        history.push('/');
        return response.data;
      })
    };
  }

export default function reducer(state = initialState, action) {
    switch(action.type) {
    case GET_BOOKS + '_FULFILLED':
        return Object.assign({}, state, { books: action.payload });
    case LOGIN + "_FULFILLED":
        return Object.assign({}, state, {user: action.username});
    case REGISTER + "_FULFILLED":
        return Object.assign({}, state, { user: action.username})
    default: 
            return state;
    }
}

