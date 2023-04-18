import {
  DocumentData,
  QuerySnapshot,
  Timestamp,
  collection,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const createUser = async (uid: string, email: string | null): Promise<void> => {
  const userRef = doc(db, 'users', uid);

  return setDoc(userRef, {
    uid,
    email,
    createdAt: Timestamp.now(),
  });
};

// export const createToDo = async (uid: string, value: string): Promise<DocumentReference> => {
//   const toDosRef = collection(db, 'users', uid, 'to-dos');

//   return addDoc(toDosRef, { value });
// };

export const getUserToDos = async (uid: string): Promise<QuerySnapshot<DocumentData>> => {
  const toDosRef = collection(db, 'users', uid, 'toDos');

  // Retrieve all documents in the todos collection
  return getDocs(toDosRef);
};
