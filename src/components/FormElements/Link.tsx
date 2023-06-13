import React, { ReactNode } from 'react'

interface LinkProps {
    className?: string;
    children: ReactNode;
    [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ }) => {
    return (
        <div>Link Page</div>
    );
}

export default Link;