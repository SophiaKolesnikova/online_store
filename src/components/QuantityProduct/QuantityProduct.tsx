import React from 'react';
import styles from './styles.module.css';

interface IQuantityProductProps {
    quantity?: number;
}

const QuantityProduct: React.FC<IQuantityProductProps> = ({ quantity }) => {
    return <div className={styles.quantity}>{quantity}</div>;
};

export default QuantityProduct;
