import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1jEdDU6KBgV-QNRFENQB-3z8lE50MODc",
  authDomain: "lapshop-a7877.firebaseapp.com",
  projectId: "lapshop-a7877",
  storageBucket: "lapshop-a7877.firebasestorage.app",
  messagingSenderId: "1018948497465",
  appId: "1:1018948497465:web:cbce729082a81607499de8",
  measurementId: "G-HSKVRCX2BB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);