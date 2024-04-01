import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrei0-BsmPlH-rBMqKNOUK0xsqqiJnIlY",
  authDomain: "linktree-15fbd.firebaseapp.com",
  projectId: "linktree-15fbd",
  storageBucket: "linktree-15fbd.appspot.com",
  messagingSenderId: "779146136632",
  appId: "1:779146136632:web:64690c1bb5a6b50168aacd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
