import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgng2ME_vsFaLYQWrbYVsrLdb75Z5JxTI",
  authDomain: "top-revendas.firebaseapp.com",
  projectId: "top-revendas",
  storageBucket: "top-revendas.appspot.com",
  messagingSenderId: "862759778080",
  appId: "1:862759778080:web:cbbedd5c873e3e1f14c945",
  measurementId: "G-FFNRRG9KYP",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://top-revendas.appspot.com");
export const auth = getAuth(app);
