import React from 'react';
import styles from './styles.module.css';

interface IButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
