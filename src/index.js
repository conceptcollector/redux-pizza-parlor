import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';



const pizzaReducer = (state=[], action) => {
    if(action.type === 'SET_PIZZA'){
        return action.payload
    }
    return state;
}

const priceReducer = (state = 0, action) => {
  if (action.type === 'SET_PRICE'){
   return( state += Number(action.payload))
  }
  return state;
}


const checkoutReducer = (state = [], action) => {

  if(action.type==='ADD_TO_CART'){
    console.log('its working?',action.payload)
      return [...state,action.payload]
  }
  return state;
};




const storeInstance = createStore(
    combineReducers({
      pizzaReducer,
      priceReducer,
      checkoutReducer
    }),
    applyMiddleware(logger),
  );








ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,

document.getElementById('root'));
