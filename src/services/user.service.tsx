import { DocumentReference, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createUser = async (uid: string, email: string | null): Promise<void> => {
  const userRef = doc(db, 'users', uid);

  return setDoc(userRef, {
    uid,
    email,
  });
};

export const createToDo = async (uid: string, value: string): Promise<DocumentReference> => {
  const toDosRef = collection(db, 'users', uid, 'to-dos');

  return addDoc(toDosRef, { value });
};
