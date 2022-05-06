import '../App/App.css';
import {useSelector} from 'react-redux';

function Header() {

    const totalPrice = useSelector(store => store.priceReducer);

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <div id="shopping-cart" className="two">🛒: {totalPrice}</div>
        </header>
    )
}

export default Header;