import React, { ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
    return (
        <div className={`flex items-center my-6 ${className}`}>
            {children}
        </div>
    );
}

export default Wrapper;