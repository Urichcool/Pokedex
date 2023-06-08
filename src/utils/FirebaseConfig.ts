import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgX4IwM8QS0sH2NQwHbWMwcN3yyVGyUOE",
  authDomain: "pokedex-c4ef3.firebaseapp.com",
  projectId: "pokedex-c4ef3",
  storageBucket: "pokedex-c4ef3.appspot.com",
  messagingSenderId: "402142164868",
  appId: "1:402142164868:web:46bd5d5d43ba575c250fd1",
  measurementId: "G-TFC5FLPLFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

