import React from 'react';
import styles from './styles.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <span className={styles.text}>Goods4you</span>
            </div>
            <nav>
                <ul className={styles.links}>
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
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
