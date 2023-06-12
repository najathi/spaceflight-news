import Link from "next/link";
import { BiTimeFive } from 'react-icons/bi';
import { IconRead } from "../Icons/Read";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/types";
import { addFavorite } from "../../store/slice/favoritesSlice";
import { Article } from "../../pages";
import moment from "moment";

interface CartItemProps {
    article: Article;
    [key: string]: any;
}

const CartItem: React.FC<CartItemProps> = ({ article }) => {
    const [active, setActive] = useState(false);

    const toggleActiveHeart = () => {
        setActive(prevActive => !prevActive);
    }

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.favorites);

    return (
        <div className="card glass">
            <figure><img src={article.image_url} alt="car!" /></figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title w-11/12">{article.title}</h2>
                    {!active ?
                        <MdOutlineFavoriteBorder
                            className="ml-4 text-2xl cursor-pointer w-1/12"
                            onClick={() => dispatch(addFavorite(article))}
                        /> :
                        <MdFavorite
                            className="ml-4 text-2xl text-error cursor-pointer w-1/12"
                            onClick={toggleActiveHeart}
                        />
                    }
                </div>
                <div className="flex justify-between items-center my-1">
                    <div className="flex items-center text-sm"><BiTimeFive />&nbsp; {moment(article.published_at).format("MMMM D, YYYY")}</div>
                    <div className="badge badge-outline text-sm">{article.news_site}</div>
                </div>
                <p className="pb-5">{article.summary}</p>
                <div className="card-actions justify-end">
                    <Link href={`/articles/${article.id}`} className="btn btn-outline cursor-pointer">
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
