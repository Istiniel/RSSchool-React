import { useCallback, useEffect, useState } from 'react';
import { Anime, fetchAnimesByTitle } from '../API/API';

const useFetchAnimesByName = (title: string) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const initialValue = localStorage.getItem('searchKey');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    initialValue && (title = initialValue);
  }, []);

  const fetchAnimeList = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setAnimes([]);

      const response = await fetchAnimesByTitle(title);
      const animeList = response.data;

      setTimeout(() => {
        setAnimes(animeList);
        setLoading(false);

        if (animeList.length === 0) {
          setError(true);
        }
      }, 1000);
    } catch (error) {
      setError(true);
    }
  }, [title]);

  useEffect(() => {
    fetchAnimeList();
  }, [title, fetchAnimeList]);

  return { animes, loading, error };
};

export default useFetchAnimesByName;
