import {useDispatch} from 'react-redux';

function PizzaItem({pizza}){

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('I will add pizza to the checkout!', pizza.price);
        dispatch({
            type: 'SET_PRICE',
            payload: pizza.price
        })
    }

    return(
        <div>
            <ul>
                <img src ={pizza.image_path} ></img>
                <li>{pizza.name}</li>
                <li>{pizza.description}</li>
                <li>{pizza.price}</li>
            </ul>
            <button onClick={handleClick}>Add</button>
        </div>
    )

}

export default PizzaItem