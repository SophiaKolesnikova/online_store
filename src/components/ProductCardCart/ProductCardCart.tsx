import React from 'react';
import QuantityProduct from '../QuantityProduct/QuantityProduct.tsx';
import { Link } from 'react-router-dom';
import { ProductCartType } from 'app/types';
import Button from '../Atoms/Button/Button.tsx';
import styles from './styles.module.css';

interface IProductCardCartProps {
    product?: ProductCartType;
}

const ProductCardCart: React.FC<IProductCardCartProps> = ({ product }) => {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <Link to={`/product/${product?.id}`} className={styles.link}>
                    <img
                        className={styles.image}
                        src={product?.thumbnail}
                        alt="product"
                    />
                </Link>
                <div className={styles.description}>
                    <Link
                        to={`/product/${product?.id}`}
                        className={styles.title}
                    >
                        <span>{product?.title}</span>
                    </Link>
                    <span className={styles.price}>{product?.price}$</span>
                </div>
            </div>
            <div className={styles.action}>
                <Button
                    size={'small'}
                    variant={'default'}
                    type={'button'}
                    icon={'../../../public/minus.svg'}
                />
                <QuantityProduct quantity={product?.quantity} />
                <Button
                    size={'small'}
                    variant={'default'}
                    type={'button'}
                    icon={'../../../public/plus.svg'}
                />
            </div>
            <div className={styles.delete}>Delete</div>
        </div>
    );
};

export default ProductCardCart;
