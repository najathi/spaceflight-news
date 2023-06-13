import React, { ReactNode } from 'react'

interface BoxProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Box: React.FC<BoxProps> = ({ className, children }) => {
    return (
        <div className={`flex items-center ${className}`}>
            {children}
        </div>
    );
}

export default Box;