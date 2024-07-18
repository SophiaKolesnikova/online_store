import React from 'react';
import cn from 'classnames';
import classes from './styles.module.css';

interface FormGroupProps {
    onSubmit?: (e: React.FormEvent) => void;
    children: React.ReactNode;
    gap: 'small' | 'large';
    direction: 'row' | 'column';
    padding: 's' | 'm' | 'none';
}

const FormGroup: React.FC<FormGroupProps> = ({
    onSubmit,
    children,
    gap,
    direction,
    padding,
}) => {
    const mainCn = cn(
        classes.form,
        classes[direction],
        classes[gap],
        classes[padding]
    );
    return (
        <form className={mainCn} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormGroup;
