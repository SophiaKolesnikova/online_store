import React from 'react';
import Header from '../../components/Header/Header.tsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.tsx';
import Catalog from '../../components/Catalog/Catalog.tsx';
import Faq from '../../components/Faq/Faq.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <InfoBlock />
            <Catalog />
            <Faq />
            <Footer />
        </>
    );
};

export default Home;
