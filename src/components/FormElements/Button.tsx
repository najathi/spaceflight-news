import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    className?: string;
    title: string;
    icon?: any;
    onClick?: () => void | any;
    alignContent?: 'right' | 'left';
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ className, icon, title, onClick, alignContent = "left" }) => {
    const classes = twMerge(`btn ${className ?? ""}`);

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {alignContent === 'right' ? <>{!!icon && icon} {title}</> : <>{title} {!!icon && icon}</>}
        </button>
    );
}

export default Button;