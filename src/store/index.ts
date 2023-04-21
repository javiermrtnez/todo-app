import { Middleware, configureStore } from '@reduxjs/toolkit';
import toDosReducer from './toDos/toDos.slice';

// const persistanceDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
//   const { type, payload } = action;

//   // FASE 1
//   console.log(store.getState());

//   next(action);

//   // FASE 2
//   console.log(store.getState());
// };

export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
  // middleware: [persistanceDatabaseMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
