import React, { useState } from 'react'
import Meta from '../../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';

import { RootState } from '../../store/types';
import Breadcrumbs from '../../components/Breadcrumbs';
import CardItem from '../../components/CardItem';
import { removeAll } from '../../store/slice/favoritesSlice';
import { useRouter } from 'next/router';
import { Article } from '..';
import Container from '../../components/Container';
import Alert from '../../components/Alert';

interface FavoritesPageProps {

}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const [searchedArticle, setSearchedArticle] = useState<Article[] | null>(favorites);
    const [search, setSearch] = useState('');

    const handleSearch = (e: any) => {
        if (e.key === 'Enter') {
            const results = favorites.filter((item: Article) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            return setSearchedArticle(results);
        }
        setSearchedArticle(null);
    };

    return (
        <>
            <Meta />
            <Container>
                <div className="flex justify-between items-center my-6">
                    <Breadcrumbs
                        paths={[
                            { title: 'Favorites', route: '/favorites' },
                        ]}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={handleSearch}
                        className="input input-bordered input-info w-full max-w-[50%] md:max-w-xs"
                    />
                </div>

                {(searchedArticle && searchedArticle.length > 0) ?
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                            {searchedArticle.map((article) => (
                                <CardItem
                                    key={article.id}
                                    article={article} />
                            ))}
                        </div>
                        <button
                            className="btn text-2xl my-8"
                            onClick={() => {
                                dispatch(removeAll());
                                router.push('/');
                            }}
                        >
                            <BsFillTrashFill />
                            &nbsp;Remove All
                        </button>
                    </>
                    :
                    <Alert
                        className="alert-warning"
                        text="No records found!"
                    />
                }
            </Container>
        </>
    );
}

export default FavoritesPage;