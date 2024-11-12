// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLDgjYhtyKOszOwEgdepB3lpX1AhVaIU4",
  authDomain: "auth-react-email-b6800.firebaseapp.com",
  projectId: "auth-react-email-b6800",
  storageBucket: "auth-react-email-b6800.firebasestorage.app",
  messagingSenderId: "368755285132",
  appId: "1:368755285132:web:e091e18f48368caa52afa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export default auth