import React from 'react';
import cn from 'classnames';
import classes from './styles.module.css';

interface TextFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    variant: 'primary';
    type: 'text';
    height: 'large' | 'small';
    required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    variant,
    type,
    onChange,
    placeholder,
    height,
    required,
}) => {
    const mainCn = cn(classes.primary, classes[variant], classes[height]);
    return (
        <input
            type={type}
            className={mainCn}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default TextField;
