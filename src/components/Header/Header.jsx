import '../App/App.css';
import {useSelector} from 'react-redux';

function Header() {

    const totalPrice = useSelector(store => store.priceReducer);

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <span id="shopping-cart">🛒: {totalPrice}</span>
        </header>
    )
}

export default Header;