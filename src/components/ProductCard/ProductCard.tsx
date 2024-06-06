import React from 'react';
import styles from './styles.module.css';
import { ProductListType } from 'app/types';
import SmallButton from '../SmallButton/SmallButton.tsx';
import { Link } from 'react-router-dom';

interface IProductCardProps {
    product?: ProductListType;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <Link to={`/product/${product?.id}`}>
                <img
                    src={product?.image}
                    className={styles.image}
                    alt="product"
                />
            </Link>
            <div className={styles.info}>
                <div className={styles.description}>
                    <p className={styles.title}>{product?.title}</p>
                    <p className={styles.price}>{product?.price}</p>
                </div>
                <div className={styles.action}>
                    <SmallButton icon="../../../public/cart-button.svg" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
