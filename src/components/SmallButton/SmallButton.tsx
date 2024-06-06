import React from 'react';
import styles from './styles.module.css';

interface ISmallButtonProps {
    icon: string;
}

const SmallButton: React.FC<ISmallButtonProps> = ({ icon }) => {
    return (
        <button className={styles.btn}>
            <img src={icon} alt="icon" />
        </button>
    );
};

export default SmallButton;
