import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface WrapperProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
    const classes = twMerge(`flex items-center my-6 ${className ?? ""}`);

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Wrapper;