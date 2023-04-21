import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ToDoId = string;
export type ToDoValue = string;

// Define a type for the slice state
export interface ToDo {
  id: ToDoId;
  value: ToDoValue;
  active: boolean;
}

export interface ToDoIdValue {
  id: ToDoId;
  value: ToDoValue;
}

// Define the initial state using that type
const initialState: ToDo[] = [];

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    setToDos: (state, action: PayloadAction<ToDo[]>) => {
      return action.payload;
    },
    createToDo: (state, action: PayloadAction<ToDoIdValue>) => {
      const { id, value } = action.payload;

      const toDo = {
        id,
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
    resetToDos: () => {
      return [];
    },
  },
});

export default toDosSlice.reducer;

// En REDUX se haría 'DELETE_USER_BY_ID' -> Más boilerplate
export const { setToDos, createToDo, deleteToDoById, toggleToDoActiveStatusById, resetToDos } =
  toDosSlice.actions;
