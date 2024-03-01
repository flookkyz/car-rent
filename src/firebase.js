// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2UXyO0HCU15R131OIdJBx-2njzytLZMU",
  authDomain: "my-web-shop-ea41b.firebaseapp.com",
  projectId: "my-web-shop-ea41b",
  storageBucket: "my-web-shop-ea41b.appspot.com",
  messagingSenderId: "1039616213846",
  appId: "1:1039616213846:web:2ed7210b3a1c054f824cf7",
  measurementId: "G-PPBE55EVKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };