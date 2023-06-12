import Link from "next/link";

interface CartItemProps {
    title: string;
    summary: string;
    image: string;
    link: string;
    [key: string]: any;
}

const CartItem: React.FC<CartItemProps> = ({ title, summary, image, link }) => {
    return (
        <div className="card glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="pb-5">{summary}</p>
                <div className="card-actions justify-end">
                    <Link href={link} className="btn btn-primary">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
