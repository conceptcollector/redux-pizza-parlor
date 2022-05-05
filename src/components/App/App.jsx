import React from 'react';
import axios from 'axios';
import './App.css';
import  { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import PizzaList from './PizzaList/PizzaList'



function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('in useEffect');
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: 'SET_PIZZA',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <PizzaList getPizzas={getPizzas} />
    </div>
  );
}

export default App;
