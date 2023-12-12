import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiSVv-0m__Oh_FrJT5-agiKfn5cYWJIVQ",
  authDomain: "portfolio-e4807.firebaseapp.com",
  projectId: "portfolio-e4807",
  storageBucket: "portfolio-e4807.appspot.com",
  messagingSenderId: "635921589583",
  appId: "1:635921589583:web:3be9cbec192ae81663913a",
};
// initialize firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
// firebase auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// collection ref
const colRef = collection(db, "emails");

export {
  db,
  auth,
  colRef,
  addDoc,
  provider,
  serverTimestamp,
  onSnapshot,
  orderBy,
};
