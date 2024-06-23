import React from 'react';
import { useGetCartsQuery } from '../../store/api/carts.api.ts';
import Header from '../../components/Header/Header.tsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.tsx';
import Catalog from '../../components/Catalog/Catalog.tsx';
import Faq from '../../components/Faq/Faq.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const Home: React.FC = () => {
    const userId = Number(localStorage.getItem('userId'));
    const { isLoading: getCartsLoading, isError: getCartsError } =
        useGetCartsQuery(userId);

    return (
        <>
            {getCartsLoading && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    Loading...
                </p>
            )}
            {getCartsError && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        fontSize: '18px',
                    }}
                >
                    Something wrong...
                </p>
            )}
            <Header />
            <main>
                <InfoBlock />
                <Catalog />
                <Faq />
            </main>
            <Footer />
        </>
    );
};

export default Home;
