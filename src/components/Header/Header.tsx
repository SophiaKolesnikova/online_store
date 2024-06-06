import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <span className={styles.text}>Goods4you</span>
            </Link>
            <nav>
                <ul className={styles.navbar}>
                    <li>
                        <a href="#" className={styles.link}>
                            Catalog
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.link}>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <Link to={'/cart'} className={styles.link}>
                            Cart
                            <img
                                src="../../../public/cart-link.svg"
                                alt="cart"
                            />
                        </Link>

                        {/*</a>*/}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
