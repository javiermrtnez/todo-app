import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createUser = async (uid: string, email: string | null): Promise<void> => {
  const userRef = doc(db, 'users', uid);

  return setDoc(userRef, {
    uid,
    email,
  });
};
