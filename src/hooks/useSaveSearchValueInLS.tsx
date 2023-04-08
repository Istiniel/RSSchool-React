import React, { useEffect, useRef } from 'react';

type useSaveSearchValueType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const useSaveSearchValueInLS = ({ searchValue, setSearchValue }: useSaveSearchValueType) => {
  const inputValue = useRef<string>(searchValue);

  useEffect(() => {
    const initialValue = localStorage.getItem('searchKey');
    initialValue && setSearchValue(initialValue);

    return () => {
      localStorage.setItem('searchKey', inputValue.current);
    };
  }, [setSearchValue]);

  useEffect(() => {
    inputValue.current = searchValue;
  }, [searchValue, setSearchValue]);

  return;
};

export default useSaveSearchValueInLS;
