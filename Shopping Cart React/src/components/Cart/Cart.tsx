import React from 'react';
import { CartItemType, CartProps } from '../../assets/Types';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0).toFixed(2);

    return (
        <aside className = 'cart'>
            <h2>Your shopping cart</h2>

            { cartItems.length === 0 ? <p>No items in the cart.</p> : null }

            { cartItems.map(item => (
                <CartItem
                    key = { item.id }
                    item = { item }
                    addToCart = { addToCart }
                    removeFromCart = { removeFromCart }
                />
            )) }

            <h2>Total: ${ calculateTotal(cartItems) }</h2>
        </aside>
    );
}

export default Cart;