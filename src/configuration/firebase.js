// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

//Configuration
const firebaseConfig = {

  //devans
  // apiKey: "AIzaSyDy9K9V9tMRsKMZ73dOIRiwquM-vyC1nVI",
  // authDomain: "registration-78709.firebaseapp.com",
  // projectId: "registration-78709",
  // storageBucket: "registration-78709.appspot.com",
  // messagingSenderId: "207657631029",
  // appId: "1:207657631029:web:69e4917cfa98907590a07c",
  // measurementId: "G-ZP11HRQ82R"

  //livewires
  apiKey: "AIzaSyDpPLA4Nt1FY6hsoseVPYD2JRP7e9ENKD4",
  authDomain: "srm-timetable-bb661.firebaseapp.com",
  projectId: "srm-timetable-bb661",
  storageBucket: "srm-timetable-bb661.appspot.com",
  messagingSenderId: "1062574904489",
  appId: "1:1062574904489:web:46160ce4a3c6c9bf6485b8",
  measurementId: "G-008T9SX14L"

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















