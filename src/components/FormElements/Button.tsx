import React from 'react'

interface ButtonProps {
    className?: string;
    title: string;
    icon?: any;
    onClick?: () => void | any;
    alignContent?: 'right' | 'left';
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ className, icon, title, onClick, alignContent = "left" }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
        >
            {alignContent === 'right' ? <>{!!icon && icon} {title}</> : <>{title} {!!icon && icon}</>}
        </button>
    );
}

export default Button;