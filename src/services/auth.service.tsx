import {
  GithubAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const logIn = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logInGoogle = async (): Promise<UserCredential> => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logInGitHub = async (): Promise<UserCredential> => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider);
};

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logOut = async (): Promise<void> => {
  return signOut(auth);
};
