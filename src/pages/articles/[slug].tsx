import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import Meta from '../../components/Meta';
import axios from 'axios';
import { useRouter } from 'next/router';
import moment from 'moment';

import { Article } from '..';
import ArticleItem from '../../components/Article';

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const { data } = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${slug}`);

    return {
        props: {
            article: data,
        },
    };
}

interface ArticlesPageProps {
    article: Article;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ article }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Meta />
            <div
                id="articleList"
                className="container py-12 mx-auto"
            >
                {article &&
                    <Breadcrumbs
                        paths={[
                            { title: 'Articles', route: '/#articleList' },
                            { title: article.title, route: '/articles/' + article.id }
                        ]}
                    />
                }

                {article &&
                    <ArticleItem
                        title={article.title}
                        published_at={moment(article.published_at).format("MMMM D, YYYY")}
                        news_site={article.news_site}
                        summary={article.summary}
                        image={article.image_url}
                        url={article.url}
                    />
                }
            </div>
        </>
    );
}

export default ArticlesPage;