import Link from 'next/link'

interface HeroProps {
    [key: string]: any;
    title: string;
    desc: string;
    linkName: string;
    link: string;
}

const Hero: React.FC<HeroProps> = ({ title, desc, linkName, link }) => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("/assets/images/sites/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{desc}</p>
                    <button className="btn btn-primary"><Link href={link}>{linkName}</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
