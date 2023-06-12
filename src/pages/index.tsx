import { NextPage } from "next";
import axios from "axios";
import { useState } from 'react';
import moment from "moment";
import { useRouter } from "next/router";

import Hero from "../components/Hero";
import Meta from "../components/Meta";
import CardItem from '../components/CardItem';
import Breadcrumbs from "../components/Breadcrumbs";
import { IconLeftOpenBig, IconRightOpenBig } from "../components/Icons/Arrows";
import Loading from "../components/Loading";

export async function getServerSideProps({ query }: any) {
    const page = query.page || 1;
    const itemsPerPage = 21;
    const offset = (page - 1) * itemsPerPage;
    const search = query.search || "";
    const { data } = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles?offset=${offset}&limit=${itemsPerPage}&search=${search}`);

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            articles: data.results,
            page: +page,
            search: search
        },
    };
}

export type Article = {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: Date;
    featured: boolean;
}

interface HomePageProps {
    articles: [Article];
    page: number;
    search: string;
}

const HomePage: NextPage<HomePageProps> = ({ articles, page, search: initialSearch }) => {
    const [search, setSearch] = useState(initialSearch);
    const router = useRouter();

    const handleSearch = (e: any) => {
        if (e.key === 'Enter') {
            router.push(`/?page=1&search=${e.target.value}#articleList`);
        }
    };

    return (
        <>
            <Meta />
            <Hero
                title="Spaceflight News"
                desc="The leading source for online space news"
                linkName="Get Started"
                link="#articleList"
            />
            <div
                id="articleList"
                className="container py-12 mx-auto"
            >
                <div className="flex justify-between items-center my-6">
                    <Breadcrumbs />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={handleSearch}
                        className="input input-bordered input-info w-full max-w-xs"
                    />
                </div>

                {articles &&
                    <div className="grid grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <CardItem
                                key={article.id}
                                title={article.title}
                                image={article.image_url}
                                summary={article.summary}
                                news_site={article.news_site}
                                published_at={moment(article.published_at).format("MMMM D, YYYY")}
                                link={`/articles/${article.id}`}
                            />
                        ))}
                    </div>
                }

                <div className="flex justify-center items-center my-6">
                    {!router.isFallback ?
                        <div className="join flex items-center">
                            {page > 1 &&
                                <a
                                    className="btn btn-outline join-item mr-3 flex items-center text-sm"
                                    href={`/?page=${page - 1}#articleList`}>
                                    <IconLeftOpenBig /> &nbsp;Previous
                                </a>
                            }
                            <a
                                className="btn btn-outline btn-primary join-item flex items-center text-sm"
                                href={`/?page=${page + 1}#articleList`}>
                                <span className="loading loading-spinner"></span>
                                Next &nbsp;<IconRightOpenBig />
                            </a>
                        </div>
                        :
                        <Loading />
                    }
                </div>
            </div>
        </>
    )
};

export default HomePage;