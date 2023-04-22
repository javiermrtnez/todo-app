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

      state.unshift({
        id,
        value,
        active: true,
      });
    },
    rollbackCreateToDo: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;
      const isToDoCreated = state.some((toDo) => toDo.id === id);

      if (isToDoCreated) {
        return state.filter((toDo) => toDo.id !== id);
      }
    },
    deleteToDoById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.filter((toDo) => toDo.id !== id);
    },
    rollbackDeleteToDoById: (state, action: PayloadAction<ToDo>) => {
      const isToDoAlreadyCreated = state.some((toDo) => toDo.id === action.payload.id);

      if (!isToDoAlreadyCreated) {
        state.unshift(action.payload);
      }
    },
    toggleToDoActiveStatusById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.map((toDo) => (toDo.id === id ? { ...toDo, active: !toDo.active } : toDo));
    },
    rollbackToggleToDoActiveStatusById: (state, action: PayloadAction<ToDo>) => {
      const prevToDo = action.payload;

      return state.map((toDo) => (toDo.id === prevToDo.id ? prevToDo : toDo));
    },
    resetToDos: () => {
      return [];
    },
  },
});

export const {
  setToDos,
  createToDo,
  rollbackCreateToDo,
  deleteToDoById,
  rollbackDeleteToDoById,
  toggleToDoActiveStatusById,
  rollbackToggleToDoActiveStatusById,
  resetToDos,
} = toDosSlice.actions;
