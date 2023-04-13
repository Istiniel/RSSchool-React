import React, { useEffect, useState } from 'react';
import st from './searchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeSearchQuery, selectSearchQuery } from '../../redux/features/anime/anime';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);

  function handleSubmit(event: React.SyntheticEvent) {
    dispatch(changeSearchQuery(searchValue));
    event.preventDefault();
  }

  useEffect(() => {
    setSearchValue(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
