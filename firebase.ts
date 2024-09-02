import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAzi-Mb8ztL9FUoYzoIDONcqz8txUzA-3c",
    authDomain: "nexiooo.firebaseapp.com",
    projectId: "nexiooo",
    storageBucket: "nexiooo.appspot.com",
    messagingSenderId: "521582398730",
    appId: "1:521582398730:web:61f47f93b640720d4b7ef3",
    measurementId: "G-JYVL3NVWY9"
  };
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);
  export { db };