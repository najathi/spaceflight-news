import { NextPage } from "next";
import axios from "axios";
import { useState } from 'react';

import Hero from "../components/Hero";
import Meta from "../components/Meta";
import CardItem from '../components/CardItem';
import Breadcrumbs from "../components/Breadcrumbs";
import { useRouter } from "next/router";

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

type Article = {
    id: number;
    title: string;
    url: string;
    image_url: string;
    summary: string;
    published_at: Date;
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
                                link={`/articles/${article.id}`}
                            />
                        ))}
                    </div>
                }

                <div className="join my-6 mx-auto">
                    {page > 1 && <a className="btn btn-outline join-item mr-3" href={`/?page=${page - 1}#articleList`}>Previous</a>}
                    <a className="btn btn-outline btn-primary join-item" href={`/?page=${page + 1}#articleList`}>Next</a>
                </div>
            </div>

        </>
    )
};

export default HomePage;