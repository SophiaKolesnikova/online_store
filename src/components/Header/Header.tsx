import React from 'react';
import styles from './styles.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.text}>Goods4you</span>
            </div>
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
                        <a href="#" className={styles.link}>
                            Cart
                            <img src="../../../public/cart.svg" alt="cart" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
