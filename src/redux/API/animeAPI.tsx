import {
  fetchBaseQuery,
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import { fetchAnimeByIdResponse, fetchAnimesResponse } from './../../API/API';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const animeAPI = createApi({
  reducerPath: 'animeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
  endpoints: (builder) => ({
    fetchAnimesByName: builder.query<fetchAnimesResponse, string>({
      query: (title) => `anime?q=${title}&sfw`,
    }),
    fetchAnimeById: builder.query<fetchAnimeByIdResponse, number>({
      query: (id) => `anime/${id}`,
    }),
  }),
});

export const { useFetchAnimeByIdQuery, useFetchAnimesByNameQuery } = animeAPI;
