function PizzaItem({pizza}){

    const handleClick = () => {
        console.log('I will add pizza to the checkout!',pizza);

        dispatch({
            type:'ADD_TO_CART',
            payload: pizza
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