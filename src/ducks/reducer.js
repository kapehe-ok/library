import axios from "axios";

let initialState = {
    user: '',
    books: []
}

const GET_BOOKS= "GET_BOOKS";


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

export default function reducer(state = initialState, action) {
    switch(action.type) {
    case GET_BOOKS + '_FULFILLED':
        return Object.assign({}, state, { books: action.payload });
    default: 
            return state;
    }
}

