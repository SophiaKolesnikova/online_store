import React from 'react';
import styles from './styles.module.css';

interface CounterProps {
    totalQuantity?: number;
}

const Counter: React.FC<CounterProps> = ({ totalQuantity }) => {
    return (
        <>
            <div className={styles.counter}>{totalQuantity}</div>
        </>
    );
};

export default Counter;
