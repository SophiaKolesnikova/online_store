import React from 'react';
import Title from '../Atoms/Title/Title.tsx';
import ProductCardCart from '../ProductCardCart/ProductCardCart.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import styles from './styles.module.css';

const MyCart: React.FC = () => {
    const { cart, isLoading, isError } = useAppSelector((state) => state.cart);

    return (
        <main className={styles.container}>
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
                    An occured error: {isError.message}
                </p>
            )}
            {cart && cart.length > 0 ? (
                cart.map((cart) => (
                    <div className={styles.content} key={cart.id}>
                        <section className={styles.products}>
                            {cart.products &&
                                cart.products.map((product) => (
                                    <ProductCardCart
                                        key={product?.id}
                                        product={product}
                                    />
                                ))}
                        </section>
                        <section className={styles.info}>
                            <div className={styles.count}>
                                <p className={styles.text}>Total count:</p>
                                <span className={styles.amount}>
                                    {cart.totalProducts}
                                </span>
                            </div>
                            <div className={styles.total}>
                                <p className={styles.price}>Total price:</p>
                                <span className={styles.sum}>
                                    {cart.total}$
                                </span>
                            </div>
                            <div className={styles.discount}>
                                <p className={styles.description}>
                                    Total price with discount:
                                </p>
                                <span className={styles.quanity}>
                                    {cart.discountedTotal}$
                                </span>
                            </div>
                        </section>
                    </div>
                ))
            ) : (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    There are no items in the cart
                </p>
            )}
        </main>
    );
};

export default MyCart;
