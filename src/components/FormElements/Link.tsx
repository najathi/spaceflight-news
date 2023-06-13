import React, { ReactNode } from 'react'

interface LinkProps {
    className?: string;
    title: string;
    icon?: any;
    href?: string;
    alignContent?: 'right' | 'left';
    [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ className, icon, title, href, alignContent = "left" }) => {
    return (
        <a
            className={`btn btn-outline text-sm ${!!icon && "flex items-center"} ${className}`}
            href={href}
        >
            {alignContent === 'right' ? <>{!!icon && icon} {title}</> : <>{title} {!!icon && icon}</>}
        </a>
    );
}

export default Link;