import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp  } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCPZP3l9iPZWHYm1UcIJVR6uzewPat1zR4",
  authDomain: "cart-532cc.firebaseapp.com",
  projectId: "cart-532cc",
  storageBucket: "cart-532cc.appspot.com",
  messagingSenderId: "194207723873",
  appId: "1:194207723873:web:6e6e4bb85842fefa225520",
  measurementId: "G-Y5NSE4FNBQ"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const db =  getFirestore(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




