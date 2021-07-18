// Import createStore function from redux and
import { createStore } from 'redux';
// import reducer and initialState from reducers
import {reducer, initialState} from './reducers';

// create store using createStore and pass in reducer function with initial state values
export const store = createStore(reducer, initialState );

