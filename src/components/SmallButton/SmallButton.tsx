import React from 'react';
import styles from './styles.module.css';

interface ISmallButtonProps {
    icon: string;
    onClick?: () => void;
}

const SmallButton: React.FC<ISmallButtonProps> = ({ icon, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            <img src={icon} alt="icon" />
        </button>
    );
};

export default SmallButton;
