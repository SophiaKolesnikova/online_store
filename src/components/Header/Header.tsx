import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../helpers.ts';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <span className={styles.text}>Goods4you</span>
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
                        <Link to={'/cart'} className={styles.link}>
                            Cart
                            <img
                                src="../../../public/cart-link.svg"
                                alt="cart"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
