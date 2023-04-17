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
const initialState: ToDo[] = [
  {
    id: '0',
    value: 'Complete online JavaScript course',
    active: false,
  },
  {
    id: '1',
    value: 'Jog around the park',
    active: true,
  },
  {
    id: '2',
    value: '10 minutes meditation',
    active: true,
  },
  {
    id: '3',
    value: 'Read for 1 hour',
    active: true,
  },
  {
    id: '4',
    value: 'Complete ToDo App',
    active: true,
  },
];

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    createToDo: (state, action: PayloadAction<ToDoValue>) => {
      const value = action.payload;

      const toDo = {
        id: state.length.toString(),
        value,
        active: true,
      };

      return [toDo, ...state];
    },
    deleteToDoById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.filter((toDo) => toDo.id !== id);
    },
    toggleToDoActiveStateById: (state, action: PayloadAction<ToDoId>) => {
      const id = action.payload;

      return state.map((toDo) => (toDo.id === id ? { ...toDo, active: !toDo.active } : toDo));
    },
  },
});

export default toDosSlice.reducer;

// En REDUX se haría 'DELETE_USER_BY_ID' -> Más boilerplate
export const { createToDo, deleteToDoById, toggleToDoActiveStateById } = toDosSlice.actions;
