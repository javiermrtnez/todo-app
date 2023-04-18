import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ToDoId = string;
export type ToDoValue = string;

// Define a type for the slice state
export interface ToDo {
  id: ToDoId;
  value: ToDoValue;
  active: boolean;
}

// Define the initial state using that type
const initialState: ToDo[] = [];

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    createToDo: (state, action: PayloadAction<ToDoValue>) => {
      const value = action.payload;

      const toDo = {
        id: crypto.randomUUID(),
        value,
        active: true,
      };

      state.unshift(toDo);
    },
    deleteToDoById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.filter((toDo) => toDo.id !== id);
    },
    toggleToDoActiveStatusById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.map((toDo) => (toDo.id === id ? { ...toDo, active: !toDo.active } : toDo));
    },
  },
});

export default toDosSlice.reducer;

// En REDUX se haría 'DELETE_USER_BY_ID' -> Más boilerplate
export const { createToDo, deleteToDoById, toggleToDoActiveStatusById } = toDosSlice.actions;
