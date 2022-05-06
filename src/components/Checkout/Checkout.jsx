import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Checkout() {

    const dispatch = useDispatch();
    const pizzaCart = useSelector(store => store.checkoutReducer);

    return(
        <table>
            <thead>
                <tr>
                    <th>Your Pizza</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {pizzaCart.map((pizzaOrdered) => {
                    console.log(pizzaOrdered);
                    return(
                    <tr key={pizzaOrdered.id}>
                        <td>{pizzaOrdered.name}</td>
                        <td>{pizzaOrdered.price}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    );


}

export default Checkout