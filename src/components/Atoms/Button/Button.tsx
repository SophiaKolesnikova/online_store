import React from 'react';
import classes from './styles.module.css';
import cn from 'classnames';

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    size: 'small' | 'large';
    variant: 'primary' | 'default';
    type: 'button' | 'submit';
    icon?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    size,
    variant,
    type,
    icon,
    disabled,
}) => {
    const mainCn = cn(classes.button, classes[size], classes[variant]);
    return (
        <button
            className={mainCn}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {icon && <img src={icon} alt="icon" />}
            {children}
        </button>
    );
};

export default Button;
