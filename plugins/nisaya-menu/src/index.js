import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from '@wordpress/element';
import Menu from './components/menu-components';
import Cart from './components/cart-components';

const App = () => {
	const [cartItems, setCartItems] = useState([
		{
			'id': '0',
			'name': 'item',
			'price': '1.00',
			'quantity': '1'
		}
	]);
	const addToCart = (item) => {
		setCartItems([...cartItems, item]);
	};
	return (
		<div>
			<Menu addToCart={addToCart}/>
			<Cart cartItems={cartItems}/>
		</div>
	);
}

// event listener addresses 'not a DOM element' by making sure HTML markup is loaded
document.addEventListener( 'DOMContentLoaded', () => {
	const element = document.getElementById('root');
	const root = createRoot( element );

	root.render(<App />);
} );

export default App;
