import { BiTimeFive } from 'react-icons/bi';
import { GoLinkExternal } from 'react-icons/go';
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Article } from '../../pages';
import { addFavorite, removeFavorite } from '../../store/slice/favoritesSlice';
import { RootState } from '../../store/types';
import Wrapper from '../Container/Wrapper';
import Box from '../Container/Box';

interface ArticleProps {
    article: Article
    [key: string]: any;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    function checkIfElementExist() {
        return favorites.some(item => item.id === article.id);
    }

    return (
        <div className="bg-white overflow-hidden sm:rounded-lg">
            <div className="mb-4">
                <Box className="justify-between items-start">
                    <h2 className="text-2xl font-bold mb-2 w-11/12">{article.title}</h2>
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
                <Box className="text-sm text-gray-500 my-1">
                    <span className='badge'>{article.news_site}</span>
                    <span className="mx-1">&middot;</span>
                    <Box><BiTimeFive />&nbsp; {moment(article.published_at).format("MMMM D, YYYY")}</Box>
                </Box>
            </div>
            <img src={article.image_url} alt={article.title} className="w-full mb-4 rounded" />
            <p className="text-gray-700 mb-4">{article.summary}</p>

            <a href={article.url} rel="noreferrer" className="cursor-pointer text-sm flex items-center" target='_blank'>Source of news &nbsp;<GoLinkExternal /></a>
        </div>
    );
}

export default Article;