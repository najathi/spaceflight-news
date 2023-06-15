import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface GridProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Grid: React.FC<GridProps> = ({ className, children }) => {
    const classes = twMerge(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${className ?? ""}`);

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Grid;