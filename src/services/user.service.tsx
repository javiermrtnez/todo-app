import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Create new user in "users" collection
 */
export const createUser = async (uid: string, email: string | null): Promise<void> => {
  const userRef = doc(db, 'users', uid);

  return setDoc(userRef, {
    email,
    createdAt: Timestamp.now(),
  });
};
