import React from 'react';
import styles from './styles.module.css';

interface ITitleProps {
    text: string;
}

const Title: React.FC<ITitleProps> = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
