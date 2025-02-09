import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from 'types/characters';

export interface FavoritesState {
  items: CharacterType[];
}

const initialState: FavoritesState = {
  items: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  selectors: {
    selectFavoritesItems: state => state.items
  },
  reducers: {
    delete: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    add: (state, action: PayloadAction<CharacterType>) => {
      const existed = state.items.find(i => i.id === action.payload.id);
      if (!existed) {
        state.items.push({ ...action.payload });
        return;
      }
    }
  }
});

export const favoritesActions = favoritesSlice.actions;

export const { selectFavoritesItems } = favoritesSlice.selectors;

export default favoritesSlice.reducer;
