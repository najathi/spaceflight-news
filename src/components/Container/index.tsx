import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
    id?: string;
    className?: string;
    [key: string]: any;
}

const Container: React.FC<ContainerProps> = ({ children, id, className }) => {
    return (
        <div
            id={id}
            className={`container py-4 md:py-8 px-4 md:px-0 mx-auto ${className}}`}
        >
            {children}
        </div>
    );
}

export default Container;