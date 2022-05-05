import React from 'react';
import {useSelector} from 'react-redux'

function PizzaList({ getPizzas }) {
    const pizzaList = useSelector(store => store.pizzaReducer);

  return (
    <ul>
      {pizzaList.map((pizza) => 
        < PizzaItem key={index} pizza={pizza}/>  
      )}
    </ul>
  )
}

export default PizzaList;