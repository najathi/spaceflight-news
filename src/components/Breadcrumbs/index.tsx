import { AiOutlineHome } from 'react-icons/ai';
import LinkWrap from "../FormElements/LinkWrap";

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
                <li><LinkWrap href="/"><AiOutlineHome /> &nbsp;Home</LinkWrap></li>
                {paths &&
                    paths.map((path: PathType, idx: number) => (
                        <li key={idx}><LinkWrap href={path.route}>{path.title}</LinkWrap></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs;
