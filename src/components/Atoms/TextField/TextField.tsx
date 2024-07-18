import React from 'react';
import cn from 'classnames';
import classes from './styles.module.css';

interface TextFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: 'Search by title';
    variant: 'primary';
    type: 'text';
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    variant,
    type,
    onChange,
    placeholder,
}) => {
    const mainCn = cn(classes.input, classes[variant]);
    return (
        <div>
            <input
                type={type}
                className={mainCn}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextField;
