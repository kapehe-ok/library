// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
// import reducer from './ducks/reducer.js';

// export default createStore(reducer, applyMiddleware( promiseMiddleware() ));

import {createStore} from 'redux';
import reducer from './ducks/reducer';

let store = createStore(reducer);

export default store;