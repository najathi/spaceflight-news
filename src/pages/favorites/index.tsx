import React, { useState } from 'react'
import Meta from '../../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';

import { RootState } from '../../store/types';
import Breadcrumbs from '../../components/Breadcrumbs';
import CardItem from '../../components/CardItem';
import { removeAll } from '../../store/slice/favoritesSlice';
import { useRouter } from 'next/router';

interface FavoritesPageProps {

}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const [search, setSearch] = useState('');

    const handleSearch = (e: any) => {
        if (e.key === 'Enter') {
            //
        }
    };

    return (
        <>
            <Meta />
            <div className="container py-12 mx-auto">
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
                        className="input input-bordered input-info w-full max-w-xs"
                    />
                </div>

                {(favorites && favorites.length > 0) ?
                    <>
                        <div className="grid grid-cols-3 gap-6">
                            {favorites.map((article) => (
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
                    <div className="flex justify-normal alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>No records found!</span>
                    </div>
                }
            </div >
        </>
    );
}

export default FavoritesPage;