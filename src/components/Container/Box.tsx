import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Box: React.FC<BoxProps> = ({ className, children }) => {
    const classes = twMerge(`flex items-center ${className ?? ""}`);

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Box;