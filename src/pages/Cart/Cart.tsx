import React from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import MyCart from '../../components/MyCart/MyCart.tsx';

const Cart: React.FC = () => {
    return (
        <div>
            <Header />
            <MyCart />
            <Footer />
        </div>
    );
};

export default Cart;
