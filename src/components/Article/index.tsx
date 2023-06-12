import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { GoLinkExternal } from 'react-icons/go';

interface ArticleProps {
    title: string;
    summary: string;
    image: string;
    url: string;
    news_site: string;
    published_at: string;
    [key: string]: any;
}

const Article: React.FC<ArticleProps> = ({ title, news_site, published_at, summary, image, url }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <div className="flex items-center text-sm text-gray-500 my-1">
                    <span className='badge'>{news_site}</span>
                    <span className="mx-1">&middot;</span>
                    <div className="flex items-center"><BiTimeFive />&nbsp; {published_at}</div>
                </div>
            </div>
            <img src={image} alt={title} className="w-full mb-4 rounded" />
            <p className="text-gray-700 mb-4">{summary}</p>

            <a href={url} rel="noreferrer" className="cursor-pointer text-sm flex items-center" target='_blank'>Source of news &nbsp;<GoLinkExternal /></a>
        </div>
    );
}

export default Article;