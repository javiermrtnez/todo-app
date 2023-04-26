import { Timestamp } from 'firebase/firestore';

export type ToDoId = string;

// Define a type for the slice state
export interface ToDo {
  id: ToDoId;
  value: string;
  active: boolean;
  createdAt: Timestamp;
}
