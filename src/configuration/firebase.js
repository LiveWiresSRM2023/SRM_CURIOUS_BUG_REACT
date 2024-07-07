


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  // livewires Api Key

    apiKey: "AIzaSyDpPLA4Nt1FY6hsoseVPYD2JRP7e9ENKD4",
    authDomain: "srm-timetable-bb661.firebaseapp.com",
    projectId: "srm-timetable-bb661",
    storageBucket: "srm-timetable-bb661.appspot.com",
    messagingSenderId: "1062574904489",
    appId: "1:1062574904489:web:46160ce4a3c6c9bf6485b8",
    measurementId: "G-008T9SX14L"
 
};


const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage(); 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { firebase, firestore, storage, auth, provider };
