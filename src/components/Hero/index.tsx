import Image from 'next/image';

import styles from './Hero.module.css';

import ShowcaseImage from "../../../public/assets/images/sites/photo-1507358522600-9f71e620c44e.jpg"
import Box from '../Container/Box';
import LinkButton from '../FormElements/LinkButton';

interface HeroProps {
    [key: string]: any;
    title: string;
    desc: string;
    linkName: string;
    link: string;
}

const Hero: React.FC<HeroProps> = ({ title, desc, linkName, link }) => {
    return (
        <div className={`hero min-h-screen bg-base-200 ${styles.container}`}>
            <Image
                src={ShowcaseImage}
                alt="Spaceflight News"
                layout='fill'
                objectFit='cover'
                objectPosition="center"
                priority
            />
            <div className={styles.wrap}>
                <div className="hero-overlay bg-opacity-60 absolute"></div>
                <Box className="justify-center w-full h-full">
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{desc}</p>
                            <LinkButton
                                className="btn-primary"
                                title={linkName}
                                href={link}
                            />
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Hero;
