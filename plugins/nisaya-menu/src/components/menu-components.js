import React from 'react';
import { useEffect } from '@wordpress/element';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';
import './cart-components';

// addresses issue #8 - Create initial component structure for Menu page
class MenuItem extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		id: this.props.id,
		image: this.props.image,
		title: this.props.title,
		price: this.props.price,
		currency: this.props.currency,
		description: this.props.description,
		number: 0
	  };
	};

	// handle adding menu item to cart
	handleSubmit = () => {
		const item = [this.state.title, this.state.price, this.state.number];
		addToCart(item);
		console.log(item);
	};

	// allows to increase number ordered
	handleChange = (event) => {
		this.setState({number: event.target.value});
	};

	render() {
	  return (
		<div id={'nisaya-menu-item' + this.state.id}>
			<h3 className='nisaya-item-title'>{this.state.title}</h3>
			<img className='nisaya-item-image' src={this.state.image} />
			<p className='nisaya-item-description'>{this.state.description}</p>
			<p className='nisaya-item-price'>{this.state.currency}{this.state.price}</p>
			<form onSubmit={this.handleSubmit}>
				<input type='number' value={this.state.number} onChange={this.handleChange}></input>
				<button className='nisaya-item-button' type="submit">Add to Cart</button>
			</form>
		</div>
	  );
	}
  };

// // MenuItem compoenent rewritten as a function
// function MenuItem({ addToCart }) {
// 	const [menuItems, setMenuItems] = useState([
// 		{
// 		id: 0,
// 		image: 'img src here',
// 		title: 'title',
// 		price: 'price',
// 		currency: '$',
// 		description: 'description',
// 		number: 0
// 	  }]);

// 	// handle adding menu item to cart
// 	handleSubmit = () => {
// 		const item = [title, price, number];
// 		addToCart(item);
// 		console.log(item);
// 	};

// 	// allows to increase number ordered
// 	handleChange = (event) => {
// 		this.setState({ number: event.target.value });
// 	};

// 	return (
// 		<div id={'nisaya-menu-item' + id}>
// 			<h3 className='nisaya-item-title'>{title}</h3>
// 			<img className='nisaya-item-image' src={image} />
// 			<p className='nisaya-item-description'>{description}</p>
// 			<p className='nisaya-item-price'>{currency}{price}</p>
// 			<form onSubmit={handleSubmit()}>
// 				<input type='number' value={number} onChange={handleChange()}></input>
// 				<button className='nisaya-item-button' type="submit">Add to Cart</button>
// 			</form>
// 		</div>
// 	  );
// };


// satisfies #11 - performs the api call, consumes the data, and then returns it in the format defined by MenuItem component
// used useState and data.length > 0 rather than setting the data to [] in the constant declaration to ensure that data
// is loaded before the return
const Menu = ({addToCart}) => {
	const[data, setData] = useState([]);
    useEffect( () => {
        apiFetch( { path: '/wp-json/nisaya/v1/menu' } )
		.then( ( items ) => {
		   setData(JSON.parse(items));
        } );
    }, [] );

	return (
		<div id='nisaya-menu-items'>
			{data.length > 0 && data.map((item) => {
				return (
					<MenuItem key={item.id} {...item} addToCart={addToCart}/>
				);
			})}

		</div>
	);
};

// satisfies #12
// TODO - need to figure out how to get the data types to match the table definitions
MenuItem.propTypes = {
	id: PropTypes.number, // TODO getting that it's a string when table defined as INT
	image: function (props, propName, componentName) {
		if (!/^(http|https):\/\/[^\s/$.?#].[^\s]*$/i.test(props[propName])) {
			return new Error(
				'Invalid prop `' + propName + '` supplied to' +
				' `' + componentName + '`. Validation failed.'
			);
		}
	},
	title: PropTypes.string,
	price: PropTypes.number, // TODO getting string when table defines as decimal
	currency: PropTypes.string,
	description: PropTypes.string,
	number: PropTypes.number
}
MenuItem.defaultProps = {
	id: 0,
	image: 'img src here',
	title: "title",
	price: 0,
	currency: '$',
	description: 'description'
}

export default Menu;


