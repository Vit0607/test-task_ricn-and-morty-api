import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import type { Action } from '@reduxjs/toolkit';
import { CharactersResponse, CharacterType } from 'types/characters';

interface RootState {
  rickMortyApi: any;
}

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string;
  payload: RootState;
  err?: unknown;
} {
  return action.type === REHYDRATE;
}

export const rickMortyApi = createApi({
  reducerPath: 'rickMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload?.[reducerPath];
    }
  },
  endpoints: builder => ({
    getCharacters: builder.query<
      CharactersResponse,
      { page: number; name: string }
    >({
      query: ({ page = 1, name = '' }) => `character/?page=${page}&name=${name}`
    }),
    getCharacterById: builder.query<CharacterType, number>({
      query: id => `character/${id}`
    })
  })
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = rickMortyApi;
