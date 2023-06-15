import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkWrapProps {
    className?: string;
    children: ReactNode;
    href: string;
    [key: string]: any;
}

const LinkWrap: React.FC<LinkWrapProps> = ({ className, href, children, ...rest }) => {
    return (
        <NextLink
            href={href}
            {...rest}
        >
            <a className={className}>
                {children}
            </a>
        </NextLink>
    );
}

export default LinkWrap;