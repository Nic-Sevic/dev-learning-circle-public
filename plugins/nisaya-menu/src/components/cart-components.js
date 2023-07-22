import React from 'react';
import { useEffect } from '@wordpress/element';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';

function Cart({ cartItems }) {
	return (
        <div id='cart'>
			<div id='cart-items'>
				<h3>Cart Items</h3>
				<CartItem cartItems={cartItems} />
			</div>
			<form>
				<input type='text' value=" your name" ></input>
				<input type='text' value="address" ></input>
				<input type='text' value="phone" ></input>
				<button className='nisaya-item-button' type="submit">Order it!</button>
			</form>
        </div>
    );
};

function CartItem({cartItems}) {
	return (
		<div id='cart-item'>
			<h4 className='nisaya-item-title'>What you want</h4>
			{cartItems.map((item,index) => (
				<div key={index} className='item-in-cart'>
					{item.name}
					{item.price}
					<input type='number' value={item.quantity} ></input>
				</div>
			))}
		</div>
	);
};

export default Cart;
