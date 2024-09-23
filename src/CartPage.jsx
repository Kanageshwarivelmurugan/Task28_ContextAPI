
import React from 'react';
import { useCart } from './CartContext';
import ProductLists from './ProductLists';

const CartPage = () => {
    const { state, dispatch } = useCart();

    const totalAmount = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <ProductLists />
            <h2>Your Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-grid">
                    {state.items.map(item => (
                        <div className="cart-box" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>Description: {item.description}</p> 
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button  className='btn btn-success'  onClick={() => dispatch({ type: 'INCREMENT_ITEM', payload: item.id })}>+</button>
                            <button className='btn btn-danger' onClick={() => dispatch({ type: 'DECREMENT_ITEM', payload: item.id })}>-</button>
                        </div>
                    ))}
                </div>
            )}
            <h2>Total Quantity: {totalQuantity}</h2>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </div>
    );
};

export default CartPage;
