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
    state += Number(action.payload);
  }
  return state;
}





const storeInstance = createStore(
    combineReducers({
      pizzaReducer,
      priceReducer
    }),
    applyMiddleware(logger),
  );








ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,

document.getElementById('root'));
