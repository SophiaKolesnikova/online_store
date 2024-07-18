import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../helpers/scrollToElement.ts';
import styles from './styles.module.css';
import Title from '../Atoms/Title/Title.tsx';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Link to={'/'} className={styles.logo}>
                <Title size={'large'} variant={'primary'}>
                    Goods4you
                </Title>
            </Link>
            <nav>
                <ul className={styles.links}>
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
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
