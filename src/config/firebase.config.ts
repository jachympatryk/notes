import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore, collection, CollectionReference } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbM-G2mm8vQWfBRhc3AUWph9N0qPnmDCM",
  authDomain: "blog-b2ebe.firebaseapp.com",
  projectId: "blog-b2ebe",
  storageBucket: "blog-b2ebe.appspot.com",
  messagingSenderId: "535745455734",
  appId: "1:535745455734:web:de371a608a254daba8a157",
  measurementId: "G-6Q1FS51VCF",
};

export const firestoreCollections = {
  notes: "notes",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const getCollectionRef = <D>(collectionName: string) =>
  collection(firestore, collectionName) as CollectionReference<D>;
