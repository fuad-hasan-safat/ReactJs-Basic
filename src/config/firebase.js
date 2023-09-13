import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlr52Nvs95WVv1GTL-uCu978GawoDZjvI",
  authDomain: "in-depth-reactjs.firebaseapp.com",
  projectId: "in-depth-reactjs",
  storageBucket: "in-depth-reactjs.appspot.com",
  messagingSenderId: "46530724030",
  appId: "1:46530724030:web:e1cf5ef210a5c03afadeef"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
export default firebase;