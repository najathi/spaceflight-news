import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../pages';

const initialState: Article[] = [];

const favoritesReducer = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Article>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeAll: (state) => {
      state.splice(0, state.length)
    },
  },
});

export const { addFavorite, removeFavorite, removeAll } = favoritesReducer.actions;
export default favoritesReducer.reducer;
