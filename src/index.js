import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// const form = {
//     feeling: '',
//     understanding: '',
//     support: '',
//     comments: '',
// }

const addInput = (state = {}, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log('add feeling input', action.payload)
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, ...action.payload};
    } else if (action.type === 'ADD_SUPPORT') {
        return {...state, ...action.payload}
    } else if (action.type === 'ADD_COMMENT') {
        return {...state, ...action.payload}
    }
    return state; 
};

// const addInput = (state = [], action) => {
//     if(action.type === 'ADD_FEELING') {
//         console.log('add feeling input', action.payload)
//         return [...state, action.payload];
//     } else if (action.type === 'ADD_UNDERSTANDING') {
//         return [...state, action.payload];
//     } else if (action.type === 'ADD_SUPPORT') {
//         return [...state, action.payload];
//     } else if (action.type === 'ADD_COMMENT') {
//         return [...state, action.payload];
//     }
//     return state; 
// };

const storeInstance = createStore(
    combineReducers({
        addInput,
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
