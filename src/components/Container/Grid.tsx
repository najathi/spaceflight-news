import React, { ReactNode } from 'react'

interface GridProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Grid: React.FC<GridProps> = ({ className, children }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${className}`}>
            {children}
        </div>
    );
}

export default Grid;