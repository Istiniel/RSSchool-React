import { useCallback, useEffect, useState } from 'react';
import { Anime, fetchAnimeById } from '../API/API';

const useFetchAnimeById = (id: number) => {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAnime = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setAnime(null);

      const response = await fetchAnimeById(id);
      const anime = response.data;

      setTimeout(() => {
        setAnime(anime);
        setLoading(false);
      }, 350);
    } catch (error) {
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    fetchAnime();
  }, [id, fetchAnime]);

  return { anime, loading, error };
};

export default useFetchAnimeById;
