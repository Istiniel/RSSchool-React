import Cards from '../../components/Cards';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import st from './mainPage.module.scss';
import response from '../../API/response.js';

const MainPage = () => {
  return (
    <main className={st.main}>
      <div className="wrapper">
        <div className={st.searchBar__container}>
          <SearchBar />
        </div>
        <Cards cards={response} />
      </div>
    </main>
  );
};

export default MainPage;
