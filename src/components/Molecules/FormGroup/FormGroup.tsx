import React from 'react';
import styles from './styles.module.css';

interface FormGroupProps {
    onSubmit?: () => void;
    children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ onSubmit, children }) => {
    return (
        <form className={styles.search} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormGroup;
