const API_URL = 'https://api.jikan.moe/v4/';
const ANIME_QUERY = 'anime?q=';
const SFW = '&sfw';

const getConfig = {
  method: 'GET',
};

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
    webp: {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
  approved: true;
  titles: {
    type: string;
    title: string;
  }[];
  title?: string;
  title_english?: string | null;
  title_japanese?: string | null;
  title_synonyms?: string[];
  type: 'TV' | 'OVA' | 'Movie' | 'Special' | 'ONA' | 'Music';
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string | null;
  };
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

export interface FetchAnimesResponse {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };

  data: Anime[];
}

export interface fetchAnimeByIdResponse {
  data: Anime;
}

type ApiSettingsType = {
  fetchAnimesByTitle: (title: string) => Promise<FetchAnimesResponse>;
  fetchAnimeById: (id: number) => Promise<fetchAnimeByIdResponse>;
};

const APIQuerys: ApiSettingsType = {
  fetchAnimesByTitle: async (title: string) => {
    const endpoint = API_URL + ANIME_QUERY + title + SFW;
    return await (await fetch(endpoint, getConfig)).json();
  },

  fetchAnimeById: async (id: number) => {
    const endpoint = API_URL + 'anime/' + id;
    return await (await fetch(endpoint, getConfig)).json();
  },
};

export const { fetchAnimesByTitle, fetchAnimeById } = APIQuerys;
