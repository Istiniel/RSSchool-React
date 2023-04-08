import Cards from '../../components/Cards';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import st from './mainPage.module.scss';
import useFetchAnimeByName from '../../hooks/useFetchAnimesByName';
import Spinner from '../../components/Spinner';

const MainPage = () => {
  const [animeTitle, setAnimeTitle] = useState<string>('');

  useEffect(() => {
    const initialValue = localStorage.getItem('searchKey');
    initialValue && setAnimeTitle(initialValue);
  }, []);

  const { animes, loading, error } = useFetchAnimeByName(animeTitle);

  return (
    <main className={st.main}>
      <div className="wrapper">
        <div className={st.searchBar__container}>
          <SearchBar setAnimeTitle={setAnimeTitle} />
        </div>
        <h2 className={st.searchQuery}>Looking for anime: {animeTitle}</h2>

        {loading && <Spinner />}
        {animes && <Cards cards={animes} />}
        {error && <h2 className={st.error}>No matches ... </h2>}
      </div>
    </main>
  );
};

export default MainPage;
