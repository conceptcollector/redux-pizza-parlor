import React from 'react';
import {useSelector} from 'react-redux'
import PizzaItem from '../PizzaItem/PizzaItem'

function PizzaList({ getPizzas }) {
    const pizzaList = useSelector(store => store.pizzaReducer);

  return (
    <ul>
      {pizzaList.map((pizza) => 
        < PizzaItem key={pizza.id} pizza={pizza}/>  
      )}
    </ul>
  )
}

export default PizzaList;