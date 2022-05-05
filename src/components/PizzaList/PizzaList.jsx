import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PizzaItem from '../PizzaItem/PizzaItem'

function PizzaList({ getPizzas }) {
    const dispatch = useDispatch();
    
    const pizzaList = useSelector(store => store.pizzaReducer);
    const pizzaPrice = useSelector(store => store.priceReducer);

  return (
    <ul>
      {pizzaList.map((pizza) => 
        < PizzaItem key={pizza.id} pizza={pizza}/>  
      )}
    </ul>
  )
}

export default PizzaList;