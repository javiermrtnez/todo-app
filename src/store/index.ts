import { configureStore } from '@reduxjs/toolkit';
import toDosMiddleware from './middlewares/toDosMiddleware';
import { toDosSlice } from './slices/toDos.slice';

export const store = configureStore({
  reducer: {
    toDos: toDosSlice.reducer,
  },
  middleware: [toDosMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
