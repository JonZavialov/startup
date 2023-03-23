// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5glQJDWP7N7Ea6YIKKS2W1exqPmWT63U",
  authDomain: "startup-849d7.firebaseapp.com",
  projectId: "startup-849d7",
  storageBucket: "startup-849d7.appspot.com",
  messagingSenderId: "938619740190",
  appId: "1:938619740190:web:bc686bd6689823ca77ce0f",
  measurementId: "G-HBME3NRSQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

getAuth(app).onAuthStateChanged(function(user) {
  document.cookie = `loggedIn=${user ? user.email : false}`;
});

export default app;