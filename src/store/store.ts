import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favoritesSlice } from './favorites.slice';
import { rickMortyApi } from './api.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  favorites: favoritesSlice.reducer,
  [rickMortyApi.reducerPath]: rickMortyApi.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
  blacklist: [rickMortyApi.reducerPath]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(rickMortyApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
