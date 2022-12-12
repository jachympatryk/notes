import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbM-G2mm8vQWfBRhc3AUWph9N0qPnmDCM",
  authDomain: "blog-b2ebe.firebaseapp.com",
  projectId: "blog-b2ebe",
  storageBucket: "blog-b2ebe.appspot.com",
  messagingSenderId: "535745455734",
  appId: "1:535745455734:web:de371a608a254daba8a157",
  measurementId: "G-6Q1FS51VCF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
