import React from 'react';
import styles from './styles.module.css';
import SmallButton from '../SmallButton/SmallButton.tsx';
import QuantityProduct from '../QuantityProduct/QuantityProduct.tsx';
import { Link } from 'react-router-dom';

const ProductListCart: React.FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <Link to={'/product/:id'} className={styles.link}>
                    <img src="../../../public/product-cart.svg" alt="product" />
                </Link>
                <div className={styles.description}>
                    <Link to={'/product/:id'} className={styles.title}>
                        <p>Essence Mascara Lash Princess</p>
                    </Link>
                    <p className={styles.price}>110 $</p>
                </div>
            </div>
            <div className={styles.action}>
                <SmallButton icon={'../../../public/minus.svg'} />
                <QuantityProduct quantity="1" />
                <SmallButton icon={'../../../public/plus.svg'} />
            </div>
            <div className={styles.delete}>Delete</div>
        </div>
    );
};

export default ProductListCart;
