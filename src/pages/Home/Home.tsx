import React from 'react';
import Header from '../../components/Header/Header.tsx';
import styles from './styles.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.info}>
                <p className={styles.text}>
                    Any products from famous brands
                    <br />
                    with worldwide delivery
                </p>
                <p className={styles.description}>
                    We sell smartphones, laptops, clothes, shoes <br /> and many
                    other products at low prices
                </p>
                <button type="button" className={styles.action}>
                    Go to shopping
                </button>
                <p className={styles.background}>Goods4you</p>
            </div>
        </div>
    );
};

export default Home;
