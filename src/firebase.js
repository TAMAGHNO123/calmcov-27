// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEehRRDMAA0h9_GtU55vYHwgdrmkml4nI",
  authDomain: "hackathon-project-d06fd.firebaseapp.com",
  projectId: "hackathon-project-d06fd",
  storageBucket: "hackathon-project-d06fd.appspot.com",
  messagingSenderId: "687306313778",
  appId: "1:687306313778:web:883772cbaff251d92fac2b",
  measurementId: "G-1E5CX0R1CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
