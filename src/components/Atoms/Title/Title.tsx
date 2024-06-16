import React from 'react';
import cn from 'classnames';
import classes from './styles.module.css';

interface TitleProps {
    children?: React.ReactNode;
    size: 'medium' | 'large';
    variant: 'primary' | 'secondary';
}

const Title: React.FC<TitleProps> = ({ children, size, variant }) => {
    const mainCn = cn(classes.title, classes[size], classes[variant]);

    return <h1 className={mainCn}>{children}</h1>;
};

export default Title;
