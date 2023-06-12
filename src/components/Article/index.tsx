import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { GoLinkExternal } from 'react-icons/go';
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md';

import { Article } from '../../pages';
import moment from 'moment';

interface ArticleProps {
    article: Article
    [key: string]: any;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
    const [active, setActive] = useState(false);

    const toggleActiveHeart = () => {
        setActive(prevActive => !prevActive);
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="mb-4">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold mb-2 w-11/12">{article.title}</h2>
                    {!active ?
                        <MdOutlineFavoriteBorder
                            className="ml-4 text-2xl cursor-pointer w-1/12"
                            onClick={toggleActiveHeart}
                        /> :
                        <MdFavorite
                            className="ml-4 text-2xl text-error cursor-pointer w-1/12"
                            onClick={toggleActiveHeart}
                        />
                    }
                </div>
                <div className="flex items-center text-sm text-gray-500 my-1">
                    <span className='badge'>{article.news_site}</span>
                    <span className="mx-1">&middot;</span>
                    <div className="flex items-center"><BiTimeFive />&nbsp; {moment(article.published_at).format("MMMM D, YYYY")}</div>
                </div>
            </div>
            <img src={article.image_url} alt={article.title} className="w-full mb-4 rounded" />
            <p className="text-gray-700 mb-4">{article.summary}</p>

            <a href={article.url} rel="noreferrer" className="cursor-pointer text-sm flex items-center" target='_blank'>Source of news &nbsp;<GoLinkExternal /></a>
        </div>
    );
}

export default Article;