import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from './CustomerForm/CustomerForm';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Link to="/">Home</Link>
        <Link to="/CustomerForm">Customer Form</Link>
          <Route exact path="/">
              <img src='images/pizza_photo.png' />
              <p>Pizza is great.</p>
          </Route>
          <Route exact path="/CustomerForm">
              <CustomerForm getPizzas = {getPizzas}/>
          </Route>
      </div>
    </Router>
  );
}

export default App;
