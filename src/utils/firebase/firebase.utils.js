import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdsyhHAAl65TjHpJbo8d2UOOMGRyOWFsg",
  authDomain: "crwn-clothing-db-278a7.firebaseapp.com",
  projectId: "crwn-clothing-db-278a7",
  storageBucket: "crwn-clothing-db-278a7.appspot.com",
  messagingSenderId: "61840021878",
  appId: "1:61840021878:web:a226509c947fae381f4257",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSanpshot = await getDoc(userDocRef);
  if (!userSanpshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email ||!password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInUserWithEmailAndPassword = async (email, password) =>{
  if(!email ||!password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}