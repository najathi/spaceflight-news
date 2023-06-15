import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
    className?: string;
    title: string;
    icon?: any;
    href: string;
    alignContent?: 'right' | 'left';
    [key: string]: any;
}

const LinkButton: React.FC<LinkButtonProps> = ({ className, icon, title, href, alignContent = "left", ...rest }) => {
    const classes = twMerge(`btn ${!!icon && "flex items-center"} ${className ?? ""}`);

    return (
        <NextLink
            href={href}
            {...rest}
        >
            <a className={classes}>
                {alignContent === 'right' ? <>{!!icon && icon} {title}</> : <>{title} {!!icon && icon}</>}
            </a>
        </NextLink>
    );
}

export default LinkButton;