// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

//Configuration
const firebaseConfig = {

  //devans
  apiKey: "AIzaSyD8v6CSwzUVoPHlIfUu7ZQtBctw24CT5Bo",
  authDomain: "curiousbees-c54ac.firebaseapp.com",
  projectId: "curiousbees-c54ac",
  storageBucket: "curiousbees-c54ac.appspot.com",
  messagingSenderId: "970130165694",
  appId: "1:970130165694:web:aadf143c86b0af64d073ef",
  measurementId: "G-68Y6WL19XK"

  //livewires
  // apiKey: "AIzaSyDpPLA4Nt1FY6hsoseVPYD2JRP7e9ENKD4",
  // authDomain: "srm-timetable-bb661.firebaseapp.com",
  // projectId: "srm-timetable-bb661",
  // storageBucket: "srm-timetable-bb661.appspot.com",
  // messagingSenderId: "1062574904489",
  // appId: "1:1062574904489:web:46160ce4a3c6c9bf6485b8",
  // measurementId: "G-008T9SX14L"

  //vaseems
  // apiKey: "AIzaSyAPGQw3IjZquF_lm8slhNNAiA6FDs5yUxA",
  // authDomain: "sampsignup-53040.firebaseapp.com",
  // projectId: "sampsignup-53040",
  // storageBucket: "sampsignup-53040.appspot.com",
  // messagingSenderId: "74040939225",
  // appId: "1:74040939225:web:7c814a6796183793e1e4c8"


};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider =new GoogleAuthProvider()
export { firebase, firestore , auth,provider};















