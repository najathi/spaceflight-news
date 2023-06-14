import NextImage from 'next/image';
import { twMerge } from "tailwind-merge";

interface ImageCmpProps {
    image: string;
    title: string;
    className?: string;
    [key: string]: any;
}

const ImageCmp: React.FC<ImageCmpProps> = ({ image, title, className, ...rest }) => {
    const classes = twMerge(`relative w-full h-96 ${className ?? ""}`);

    return (
        <div className={classes}>
            <NextImage
                loader={() => image}
                src={image}
                alt={title}
                layout="fill"
                objectFit='cover'
                objectPosition="center"
                placeholder='blur'
                blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
                unoptimized
                loading="lazy"
                {...rest}
            />
        </div>
    );
}

export default ImageCmp;