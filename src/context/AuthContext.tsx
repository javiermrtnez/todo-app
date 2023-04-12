import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  GithubAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const logIn = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, googleProvider);

    const { isNewUser } = getAdditionalUserInfo(userCredential);

    if (isNewUser) {
      const { user } = userCredential;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    }
  };

  const logInGitHub = async (): Promise<UserCredential> => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const signUp = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = async (): Promise<void> => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log('Auth currentUser', currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logIn, logInGoogle, logInGitHub, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
