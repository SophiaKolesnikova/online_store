import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from 'app/types';
import CartButtonGroup from '../CartButtonGroup/CartButtonGroup.tsx';
import { removeProduct } from '../../store/cartsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import styles from './styles.module.css';

interface ProductCardCartProps {
    product?: ProductType;
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({ product }) => {
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const removeProductFromCart = () => {
        if (cart) {
            const cartId = cart[0].id;
            dispatch(removeProduct({ productId: product?.id, cartId: cartId }));
        }
    };

    return (
        <article className={styles.content}>
            <div className={styles.info}>
                <img
                    className={styles.image}
                    src={product?.thumbnail}
                    alt="product"
                />
                <Link to={`/products/${product?.id}`} className={styles.link}>
                    <div className={styles.description}>
                        <span className={styles.title}>{product?.title}</span>
                        <span className={styles.price}>{product?.price}$</span>
                    </div>
                </Link>
            </div>
            <CartButtonGroup product={product} />
            <div className={styles.delete} onClick={removeProductFromCart}>
                Delete
            </div>
        </article>
    );
};

export default ProductCardCart;
