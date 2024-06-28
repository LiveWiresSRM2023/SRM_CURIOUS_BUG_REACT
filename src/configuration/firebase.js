


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  // livewires Api Key
 
};


const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage(); 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { firebase, firestore, storage, auth, provider };
