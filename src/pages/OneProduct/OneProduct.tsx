import React from 'react';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import ProductDetails from '../../components/ProductDetails/ProductDetails.tsx';
import { useParams } from 'react-router-dom';

const OneProduct: React.FC = () => {
    const { productId } = useParams();
    return (
        <>
            <Header />
            <ProductDetails id={productId} />
            <Footer />
        </>
    );
};

export default OneProduct;
