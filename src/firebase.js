import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOqv9DxXeQPdRwKjSNyN8-rDJ2MNmKa4k",
    authDomain: "hackathon-97888.firebaseapp.com",
    projectId: "hackathon-97888",
    storageBucket: "hackathon-97888.firebasestorage.app",
    messagingSenderId: "338479560236",
    appId: "1:338479560236:web:cafe354ce614e8340bc389"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
