import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQzqufOjBmsp9EOKkgLvWBspWwviKQDtQ",
  authDomain: "app-from-test.firebaseapp.com",
  projectId: "app-from-test",
  storageBucket: "app-from-test.firebasestorage.app",
  messagingSenderId: "343694948210",
  appId: "1:343694948210:web:9468127af1cb279eca0feb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);