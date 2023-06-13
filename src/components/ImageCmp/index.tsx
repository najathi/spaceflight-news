import NextImage from 'next/image';

import styles from './Image.module.css'

interface ImageCmpProps {
    image: string;
    title: string;
}

const ImageCmp: React.FC<ImageCmpProps> = ({ image, title }) => {
    return (
        <div className={styles.imageWrap}>
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
            />
        </div>
    );
}

export default ImageCmp;