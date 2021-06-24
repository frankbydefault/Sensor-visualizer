import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "tic-proy2.firebaseapp.com",
  databaseURL: "https://tic-proy2-default-rtdb.firebaseio.com/",
  projectId: "tic-proy2",
  storageBucket: "tic-proy2.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

export default { firebase };
