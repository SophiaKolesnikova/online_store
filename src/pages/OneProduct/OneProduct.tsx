import React from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import ProductDetails from '../../components/ProductDetails/ProductDetails.tsx';

const OneProduct: React.FC = () => {
    return (
        <div>
            <Header />
            <ProductDetails />
            <Footer />
        </div>
    );
};

export default OneProduct;
