
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from './CartContext';
import CartPage from './CartPage';

const App = () => {
    return (
        <CartProvider>
            <CartPage />
        </CartProvider>
    );
};

export default App;

