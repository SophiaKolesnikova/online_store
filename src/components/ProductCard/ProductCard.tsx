import React from 'react';
import { ProductType } from 'app/types';
import { Link } from 'react-router-dom';
import CartButtonGroup from '../CartButtonGroup/CartButtonGroup.tsx';
import styles from './styles.module.css';

interface ProductCardProps {
    product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <article className={styles.card}>
            <Link key={product.id} to={`/products/${product.id}`}>
                <div className={styles.wrapper}>
                    <img
                        src={product.images[0]}
                        className={styles.image}
                        alt={product.title}
                    />
                </div>
            </Link>
            <div className={styles.info}>
                <div className={styles.description}>
                    <Link to={'#'} className={styles.title}>
                        {product.title}
                    </Link>
                    <p className={styles.price}>{product.price}</p>
                </div>
                <CartButtonGroup product={product} />
            </div>
        </article>
    );
};

export default ProductCard;
