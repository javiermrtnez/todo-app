import {
  DocumentData,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { ToDo } from '../utils/interfaces/todo.interface';

/**
 * Get all users ToDos from "users > toDos" collection
 */
export const getUserToDos = async (): Promise<QuerySnapshot<DocumentData>> => {
  const toDos = [];

  const toDosRef = collection(db, 'users', auth?.currentUser?.uid ?? '', 'toDos');

  // Retrieve all documents in the todos collection
  const toDosSnapshot = await getDocs(toDosRef);

  toDosSnapshot.forEach((doc) => {
    toDos.push({ id: doc.id, ...doc.data() });
  });

  return toDos;
};

/**
 * Create new ToDo in "users > toDos" collection
 */
export const createToDo = async ({ id, value, active, createdAt }: ToDo): Promise<void> => {
  const toDosRef = doc(db, 'users', auth?.currentUser?.uid ?? '', 'toDos', id);

  return setDoc(toDosRef, {
    value,
    active,
    createdAt,
  });
};

/**
 * Delete ToDo in "users > toDos" collection
 */
export const deleteToDo = async (id: string): Promise<void> => {
  const toDoRef = doc(db, 'users', auth?.currentUser?.uid ?? '', 'toDos', id);

  return deleteDoc(toDoRef);
};

/**
 * Toggle ToDo active status ToDo in "users > toDos" collection
 */
export const toggleToDoActiveStatus = async (id: string): Promise<void> => {
  const toDoRef = doc(db, 'users', auth?.currentUser?.uid ?? '', 'toDos', id);

  const toDoDoc = await getDoc(toDoRef);
  const currentStatus = toDoDoc.data()?.active;

  return updateDoc(toDoRef, {
    active: !currentStatus,
  });
};
