import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import Meta from '../../components/Meta';
import axios from 'axios';
import { useRouter } from 'next/router';

import ArticleItem from '../../components/Article';
import Loading from '../../components/Loading';
import Container from '../../components/Container';
import { Article } from '../../shared/types/article';

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
        return <Loading />
    }

    return (
        <>
            <Meta />
            <Container>
                {article &&
                    <Breadcrumbs
                        paths={[
                            { title: 'Articles', route: '/#articleList' },
                            { title: article.title, route: '/articles/' + article.id }
                        ]}
                    />
                }

                {article && <ArticleItem article={article} />}
            </Container>
        </>
    );
}

export default ArticlesPage;