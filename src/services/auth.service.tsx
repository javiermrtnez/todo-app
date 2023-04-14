import {
  AdditionalUserInfo,
  GithubAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

export const logIn = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logInGoogle = async (): Promise<void> => {
  const googleProvider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, googleProvider);

  const { isNewUser } = getAdditionalUserInfo(userCredential) as AdditionalUserInfo;

  if (isNewUser) {
    const { user } = userCredential;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    });
  }
};

export const logInGitHub = async (): Promise<void> => {
  const githubProvider = new GithubAuthProvider();
  const userCredential = await signInWithPopup(auth, githubProvider);

  const { isNewUser } = getAdditionalUserInfo(userCredential) as AdditionalUserInfo;

  if (isNewUser) {
    const { user } = userCredential;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    });
  }
};

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logOut = async (): Promise<void> => {
  return signOut(auth);
};
