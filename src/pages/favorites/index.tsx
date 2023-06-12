import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import Meta from '../../components/Meta';

interface FavoritesPageProps {

}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ }) => {
    const favorites = useSelector((state: RootState) => state.favorites);

    return (
        <>
            <Meta />
            <div
                id="articleList"
                className="container py-12 mx-auto"
            >
                    <Breadcrumbs
                        paths={[
                            { title: 'Favorites', route: '/favorites' },
                        ]}
                    />
            </div>
        </>
    );
}

export default FavoritesPage;