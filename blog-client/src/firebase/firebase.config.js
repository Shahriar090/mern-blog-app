// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-25a6a.firebaseapp.com",
  projectId: "mern-blog-app-25a6a",
  storageBucket: "mern-blog-app-25a6a.appspot.com",
  messagingSenderId: "104123482170",
  appId: "1:104123482170:web:ff7b159c31c1fe22f1f503",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
