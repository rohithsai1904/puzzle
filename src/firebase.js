import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhp1QG9kPl9sYEAd17mNdUKi5WjFY_jGw",
    authDomain: "bandersnatch-37a14.firebaseapp.com",
    projectId: "bandersnatch-37a14",
    storageBucket: "bandersnatch-37a14.appspot.com",
    messagingSenderId: "600223809669",
    appId: "1:600223809669:web:e7ce29658a4dd912b3a9ec",
    measurementId: "G-NH78YKX45F"
  };
  

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
    
