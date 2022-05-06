import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx'

import CustomerForm from '../CustomerForm/CustomerForm';

import  { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import PizzaList from '../PizzaList/PizzaList'




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

    <Router>
      <div className='App'>
        <Header />
        <nav>
        <Link to="/">Home</Link>
        <Link to="/CustomerForm">Customer Form</Link>
        </nav>
          <Route exact path="/">
              <p>Pizza is great.</p>
              <PizzaList getPizzas={getPizzas} />
          </Route>
          <Route exact path="/CustomerForm">
              <CustomerForm getPizzas = {getPizzas}/>
          </Route>


      
      </div>
    </Router>

  );
}

export default App;
