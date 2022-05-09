import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './middleware'
import entities from './entities/Entities';

export const store = configureStore({
  reducer: {
    entities,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});