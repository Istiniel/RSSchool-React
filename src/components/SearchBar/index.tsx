import React, { useState } from 'react';
import st from './searchBar.module.scss';
import useSaveSearchValueInLS from '../../hooks/useSaveSearchValueInLS';

type SearchBarProps = {
  setAnimeTitle: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ setAnimeTitle }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  useSaveSearchValueInLS({ searchValue, setSearchValue });

  function handleSubmit(event: React.SyntheticEvent) {
    setAnimeTitle(searchValue);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} role="searchBarForm">
      <input
        type="text"
        value={searchValue}
        className={st.searchBar}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target!.value)
        }
        placeholder="Enter anime title..."
      />
    </form>
  );
};

export default SearchBar;
