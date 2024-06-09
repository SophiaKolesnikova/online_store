import React from 'react';
import styles from './styles.module.css';
import Button from '../Button/Button.tsx';
import { scrollToElement } from '../../helpers.ts';
import { Link } from 'react-router-dom';

const InfoBlock: React.FC = () => {
    return (
        <div className={styles.info}>
            <p className={styles.text}>
                Any products from famous brands
                <br />
                with worldwide delivery
            </p>
            <p className={styles.description}>
                We sell smartphones, laptops, clothes, shoes <br /> and many
                other products at low prices
            </p>
            <div className={styles.button}>
                <Link
                    to="/#catalog"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('catalog');
                    }}
                >
                    <Button text="Go to shopping" />
                </Link>
            </div>
            <p className={styles.background}>Goods4you</p>
        </div>
    );
};

export default InfoBlock;
