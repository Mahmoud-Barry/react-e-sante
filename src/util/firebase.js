// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiudsQqY1FO4bnmMKFKXqgAYGAmQORcJ0",
  authDomain: "e-sante-dfb1e.firebaseapp.com",
  databaseURL: "https://e-sante-dfb1e-default-rtdb.firebaseio.com",
  projectId: "e-sante-dfb1e",
  storageBucket: "e-sante-dfb1e.appspot.com",
  messagingSenderId: "265831342639",
  appId: "1:265831342639:web:386fefdffa1d01d1365cda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);