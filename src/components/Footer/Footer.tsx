import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Link to={'/'} className={styles.logo}>
                <span className={styles.text}>Goods4you</span>
            </Link>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link to={'/'} className={styles.link}>
                            Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className={styles.link}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
