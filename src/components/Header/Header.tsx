import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../helpers/scrollToElement.ts';
import Title from '../Atoms/Title/Title.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import Counter from '../Counter/Counter.tsx';
import styles from './styles.module.css';

const Header: React.FC = () => {
    const { carts } = useAppSelector((state) => state.carts);

    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <Title size={'large'} variant={'primary'}>
                    Goods4you
                </Title>
            </Link>
            <nav>
                <ul className={styles.navbar}>
                    <li>
                        <Link
                            to={'/#catalog'}
                            className={styles.link}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToElement('catalog');
                            }}
                        >
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/#faq'}
                            className={styles.link}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToElement('faq');
                            }}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        {carts ? (
                            carts.map((cart) => (
                                <Link
                                    key={cart.userId}
                                    to={`/cart/${cart.userId}`}
                                    className={styles.link}
                                >
                                    Cart
                                    <div className={styles.cart}>
                                        <img
                                            src="../../../public/cart-link.svg"
                                            alt="cart"
                                        />
                                        <Counter
                                            key={cart.id}
                                            totalQuantity={cart.totalQuantity}
                                        />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className={styles.cart}>
                                <img
                                    src="../../../public/cart-link.svg"
                                    alt="cart"
                                />
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
