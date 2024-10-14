import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../slices/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import portfolioSlice from '../slices/portfolioSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['portfolioInfo', 'auth'],
};

const rootReducer = combineReducers({
  portfolioInfo: portfolioSlice,
  auth: authSlice,
  // [cryptoApi.reducerPath]: cryptoApi.reducer,
  // [cryptoLocalApi.reducerPath]: cryptoLocalApi.reducer,
  // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  // [footballApi.reducerPath]: footballApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(cryptoApi.middleware)
  // .concat(cryptoLocalApi.middleware)
  // .concat(cryptoNewsApi.middleware)
  // .concat(footballApi.middleware)
  // .concat(refreshMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
