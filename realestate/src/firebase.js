import firebase from "firebase/compat/app";
import "firebase/compat/database";

// import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJ1sdG4IZ2v-K5b7FNdffSSJvoao3a0k",
  authDomain: "intimehomes.firebaseapp.com",
  databaseURL: "https://intimehomes-default-rtdb.firebaseio.com",
  projectId: "intimehomes",
  storageBucket: "intimehomes.appspot.com",
  messagingSenderId: "1026049970349",
  appId: "1:1026049970349:web:9439b6f94126d79af9f624",
  measurementId: "G-NDQVMH9Q9B"

};

export default firebase.initializeApp(firebaseConfig);