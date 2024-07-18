import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../helpers/scrollToElement.ts';
import Title from '../Atoms/Title/Title.tsx';
import styles from './styles.module.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footer}>
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
            </div>
        </footer>
    );
};

export default Footer;
