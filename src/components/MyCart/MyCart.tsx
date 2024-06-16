import React from 'react';
import Title from '../Atoms/Title/Title.tsx';
import ProductCardCart from '../ProductCardCart/ProductCardCart.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import styles from './styles.module.css';

const MyCart: React.FC = () => {
    const { isLoading, isError, carts } = useAppSelector(
        (state) => state.carts
    );

    return (
        <div className={styles.container}>
            <Title size={'large'} variant={'secondary'}>
                My cart
            </Title>
            {isLoading && (
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
            {isError && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        fontSize: '18px',
                    }}
                >
                    An error occured: {isError.message}
                </p>
            )}
            {carts &&
                carts.map((cart) => (
                    <div className={styles.content} key={cart.userId}>
                        <div className={styles.products}>
                            {cart.products &&
                                cart.products.map((product) => (
                                    <ProductCardCart
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                        </div>
                        <div className={styles.info}>
                            <div className={styles.count}>
                                <p className={styles.text}>Total count:</p>
                                <span className={styles.amount}>
                                    {cart?.totalProducts}
                                </span>
                            </div>
                            <div className={styles.total}>
                                <p className={styles.price}>Total price:</p>
                                <span className={styles.sum}>
                                    {cart?.total}$
                                </span>
                            </div>
                            <div className={styles.discount}>
                                <p className={styles.description}>
                                    Total price with discount:
                                </p>
                                <span className={styles.quanity}>
                                    {cart?.discountedTotal}$
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MyCart;
