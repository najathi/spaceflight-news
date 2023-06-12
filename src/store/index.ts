import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slice/counterSlice';
import favoritesReducer from './slice/favoritesSlice';

export const rootReducer = combineReducers({
    counter: counterReducer,
    favorites: favoritesReducer,
});

export const wrapper = createWrapper(
    () => configureStore({ reducer: rootReducer }),
    { debug: true }
);