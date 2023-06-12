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
    removeFavorite: (state, action: PayloadAction<number>) => state.filter((item) => item.id !== action.payload),
    removeAll: () => initialState,
  },
});

export const { addFavorite, removeFavorite, removeAll } = favoritesReducer.actions;
export default favoritesReducer.reducer;
