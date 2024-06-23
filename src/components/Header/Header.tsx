import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../helpers/scrollToElement.ts';
import Title from '../Atoms/Title/Title.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import Counter from '../Counter/Counter.tsx';
import styles from './styles.module.css';

const Header: React.FC = () => {
    const { isLoading, cart } = useAppSelector((state) => state.cart);
    const userId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');

    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <Title size={'large'} variant={'primary'}>
                    Goods4you
                </Title>
            </Link>
            {authToken ? (
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
                            <Link
                                to={`/cart/${userId}`}
                                className={styles.link}
                            >
                                Cart
                                <div className={styles.cart}>
                                    {isLoading ? (
                                        <img
                                            src="../../../public/cart-link.svg"
                                            alt="cart"
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src="../../../public/cart-link.svg"
                                                alt="cart"
                                            />
                                            {!isLoading && cart.length
                                                ? cart.map((cart) => (
                                                      <Counter
                                                          key={cart.id}
                                                          totalQuantity={
                                                              cart.totalQuantity
                                                          }
                                                      />
                                                  ))
                                                : null}
                                        </>
                                    )}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </header>
    );
};

export default Header;
