import Link from "next/link";
import { BiTimeFive } from 'react-icons/bi';
import { IconRead } from "../Icons/Read";

interface CartItemProps {
    title: string;
    summary: string;
    image: string;
    link: string;
    news_site: string;
    published_at: string;
    [key: string]: any;
}

const CartItem: React.FC<CartItemProps> = ({ title, summary, image, news_site, published_at, link }) => {
    return (
        <div className="card glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center my-1">
                    <div className="flex items-center text-sm"><BiTimeFive />&nbsp; {published_at}</div>
                    <div className="badge badge-outline text-sm">{news_site}</div>
                </div>
                <p className="pb-5">{summary}</p>
                <div className="card-actions justify-end">
                    <Link href={link} className="btn btn-outline cursor-pointer">
                        <div className="flex items-center cursor-pointer">
                            <IconRead />&nbsp; Learn more
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default CartItem;
