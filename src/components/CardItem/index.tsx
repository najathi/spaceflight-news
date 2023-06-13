import Link from "next/link";
import { BiTimeFive } from 'react-icons/bi';
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import Box from "../Container/Box";
import { RootState } from "../../store/types";
import { IconRead } from "../Icons/Read";
import { addFavorite, removeFavorite } from "../../store/slice/favoritesSlice";
import { Article } from "../../pages";
import ImageCmp from "../ImageCmp";

interface CartItemProps {
    article: Article;
    [key: string]: any;
}

const CartItem: React.FC<CartItemProps> = ({ article }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    function checkIfElementExist() {
        return favorites.some(item => item.id === article.id);
    }

    return (
        <div className="card glass">
            <figure>
                <ImageCmp
                    image={article.image_url}
                    title={article.title}
                />
            </figure>
            <div className="card-body">
                <Box className="justify-between items-baseline">
                    <h2 className="card-title w-11/12">{article.title}</h2>
                    {!checkIfElementExist() ?
                        <MdOutlineFavoriteBorder
                            className="ml-4 text-2xl cursor-pointer w-1/12"
                            onClick={() => dispatch(addFavorite(article))}
                        /> :
                        <MdFavorite
                            className="ml-4 text-2xl text-error cursor-pointer w-1/12"
                            onClick={() => dispatch(removeFavorite(article.id))}
                        />
                    }
                </Box>
                <Box className="justify-between my-1">
                    <Box className="text-sm"><BiTimeFive />&nbsp; {moment(article.published_at).format("MMMM D, YYYY")}</Box>
                    <div className="badge badge-outline text-sm">{article.news_site}</div>
                </Box>
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
