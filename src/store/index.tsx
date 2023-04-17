import { configureStore } from '@reduxjs/toolkit';
import toDosReducer from './toDos/toDos.slice';

export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
