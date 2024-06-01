import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  // Import Firebase Storage
import 'firebase/compat/auth'; 
import 'firebase/compat/storage'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWNaTRQNQiOZUQcGWZmCCK0AtTCRNBad4",
    authDomain: "olx-clone-20977.firebaseapp.com",
    projectId: "olx-clone-20977",
    storageBucket: "olx-clone-20977.appspot.com",
    messagingSenderId: "151841197608",
    appId: "1:151841197608:web:923b0dffde4a7c64652f1d",
    measurementId: "G-YXVMPXLDSZ"
  };


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase app
export default Firebase;

// Get a non-default Storage bucket
var storage = firebase.app().storage("gs://olx-clone-20977.appspot.com");