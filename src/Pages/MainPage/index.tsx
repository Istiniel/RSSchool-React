import Cards from '../../components/Cards';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import st from './mainPage.module.scss';
import Spinner from '../../components/Spinner';
import { useAppSelector } from '../../redux/hooks';
import { selectSearchQuery } from '../../redux/features/anime/anime';
import { useFetchAnimesByNameQuery } from '../../redux/API/animeAPI';

const MainPage = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  const { data, error, isLoading, isFetching } = useFetchAnimesByNameQuery(searchQuery);

  return (
    <main className={st.main}>
      <div className="wrapper">
        <div className={st.searchBar__container}>
          <SearchBar />
        </div>
        <h2 className={st.searchQuery}>Looking for anime: {searchQuery}</h2>

        {(isFetching || isLoading) && <Spinner />}
        {data && !(isFetching || isLoading) && <Cards cards={data.data} />}
        {error && <h2 className={st.error}>No matches ...</h2>}
      </div>
    </main>
  );
};

export default MainPage;
