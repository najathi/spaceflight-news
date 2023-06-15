import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    children: ReactNode;
    id?: string;
    className?: string;
    [key: string]: any;
}

const Container: React.FC<ContainerProps> = ({ children, id, className }) => {
    const classes = twMerge(`container py-4 md:py-8 px-4 md:px-0 mx-auto ${className ?? ""}`);

    return (
        <div
            id={id}
            className={classes}
        >
            {children}
        </div>
    );
}

export default Container;