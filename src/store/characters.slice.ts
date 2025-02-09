import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from 'types/characters';

interface charactersState {
  items: CharacterType[];
}

const initialState: charactersState = {
  items: []
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  selectors: {
    selectCharacters: state => state.items
  },
  reducers: {
    setCharacters: (state, action: PayloadAction<CharacterType[]>) => {
      state.items = action.payload;
    }
  }
});

export const { setCharacters } = charactersSlice.actions;

export const { selectCharacters } = charactersSlice.selectors;

export default charactersSlice.reducer;
