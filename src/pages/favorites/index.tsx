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
import Grid from '../../components/Container/Grid';
import Wrapper from '../../components/Container/Wrapper';
import Button from '../../components/FormElements/Button';
import InputField from '../../components/FormElements/InputField';
import { toast } from 'react-hot-toast';

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
                <Wrapper className="justify-between">
                    <Breadcrumbs
                        paths={[
                            { title: 'Favorites', route: '/favorites' },
                        ]}
                    />
                    <InputField
                        type="text"
                        label="Search..."
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        onKeyPress={handleSearch}
                        className="input-info w-full max-w-[50%] md:max-w-xs"
                    />
                </Wrapper>

                {(searchedArticle && searchedArticle.length > 0) ?
                    <>
                        <Grid>
                            {searchedArticle.map((article) => (
                                <CardItem
                                    key={article.id}
                                    article={article} />
                            ))}
                        </Grid>
                        <Button
                            className="text-2xl my-8"
                            onClick={() => {
                                dispatch(removeAll());
                                toast.error('Favorite items were deleted.')
                                router.push('/');
                            }}
                            icon={<BsFillTrashFill />}
                            title="&nbsp; Remove All"
                            alignContent='right'
                        />
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