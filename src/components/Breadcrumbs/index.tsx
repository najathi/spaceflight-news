import Link from "next/link";
import { AiOutlineHome } from 'react-icons/ai';

type PathType = {
    title: string;
    route: string;
}

interface BreadcrumbsProps {
    [key: string]: any;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
    return (
        <div className="text-sm breadcrumbs mb-5">
            <ul>
                <li><Link href="/"><a><AiOutlineHome /> &nbsp;Home</a></Link></li>
                {paths &&
                    paths.map((path: PathType, idx: number) => (
                        <li key={idx}><Link href={path.route}><a>{path.title}</a></Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs;
