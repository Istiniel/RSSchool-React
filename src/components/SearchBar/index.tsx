import React, { useEffect, useRef, useState } from 'react';
import st from './searchBar.module.scss';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const inputValue = useRef<string>(searchValue);

  useEffect(() => {
    const initialValue = localStorage.getItem('searchKey');
    initialValue && setSearchValue(initialValue);

    return () => {
      localStorage.setItem('searchKey', inputValue.current);
    };
  }, []);

  useEffect(() => {
    inputValue.current = searchValue;
  }, [searchValue, setSearchValue]);

  function handleSubmit(event: React.SyntheticEvent) {
    console.log('submitted value: ' + searchValue);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        className={st.searchBar}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target!.value)
        }
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
