import React from 'react';
import styles from './styles.module.css';
import Title from '../Title/Title.tsx';
import ProductListCart from '../ProductListCart/ProductListCart.tsx';

const MyCart: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title text="My cart" />
            <div className={styles.content}>
                <div className={styles.products}>
                    <ProductListCart />
                    <ProductListCart />
                </div>
                <div className={styles.info}>
                    <div className={styles.count}>
                        <p className={styles.text}>Total count:</p>
                        <span className={styles.amount}>3</span>
                    </div>
                    <div className={styles.total}>
                        <p className={styles.price}>Total price:</p>
                        <span className={styles.sum}>700$</span>
                    </div>
                    <div className={styles.discount}>
                        <p className={styles.description}>
                            Total price with discount:
                        </p>
                        <span className={styles.quanity}>590$</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
