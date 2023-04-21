import {
  DocumentData,
  DocumentReference,
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';

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
export const createToDo = async (value: string): Promise<DocumentReference> => {
  const toDosRef = collection(db, 'users', auth?.currentUser?.uid ?? '', 'toDos');

  return addDoc(toDosRef, {
    value,
    active: true,
    createdAt: Timestamp.now(),
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
